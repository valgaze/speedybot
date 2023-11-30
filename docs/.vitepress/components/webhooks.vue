<template>
  <div>
    <client-only>
      <Blur :should-blur="!store.state.tokenValid">
        <el-dialog title="Register Webhook" v-model="showWebhooksForm">
          <el-form :model="webhooksForm">
            <el-form-item label="URL" prop="url">
              <el-input
                v-model="webhooksForm.url"
                placeholder="https://username.abc.com/endpoint"
              ></el-input>
            </el-form-item>
            <el-form-item label="(optional) secret" prop="secret">
              <el-input
                v-model="webhooksForm.secret"
                placeholder="secret"
              ></el-input>
            </el-form-item>
            <el-button @click="showWebhooksForm = false">Cancel</el-button>
            <el-button type="primary" @click="submit">Confirm</el-button>
          </el-form>
        </el-dialog>
        <el-row>
          <el-button
            type="primary"
            plain
            @click="promptNewWebhook"
            :icon="CirclePlusFilled"
            :disabled="!store.state.tokenValid"
            >Add New Webhook</el-button
          >
          <el-button
            type="primary"
            :icon="Download"
            plain
            @click="webhooksFetch"
            :disabled="!store.state.tokenValid"
            >Fetch Webhooks</el-button
          >
          <el-button
            type="danger"
            plain
            @click="webhooksDeleteAll"
            :disabled="!store.state.tokenValid"
            >🔥 Delete All Webhooks</el-button
          >
        </el-row>
        <el-container
          element-loading-text="Performing webhook operation..."
          style="border: 1px solid #eee"
        >
          <el-table :data="webhooksList" stripe>
            <el-table-column prop="name" label="Name"></el-table-column>
            <el-table-column prop="url" label="url"></el-table-column>
            <el-table-column prop="resource" label="Resource"></el-table-column>
            <el-table-column
              prop="hasSecret"
              label="Has Secret?"
            ></el-table-column>
            <el-table-column label="Delete">
              <template #default="scope">
                <el-button
                  size="small"
                  type="danger"
                  @click="handleDelete(scope.row)"
                  >Delete</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-container>
      </Blur>
    </client-only>
  </div>
</template>

<!-- <el-tab-pane
label="🪝 Webhooks"
:v-loading="isLoading"
v-if="tokenStatus"
> -->

<script lang="ts" setup>
import { ref, watch, onMounted } from "vue";
import { useCustomStore } from "../util/store";
// import { Webhook } from "./../../../src/types";
import Blur from "./Blur.vue";
import { ElLoading, ElMessage, ElMessageBox } from "element-plus";
import { CirclePlusFilled, Download } from "@element-plus/icons-vue";
const store = useCustomStore();
const showWebhooksForm = ref(false);
const webhooksForm = ref({
  url: "",
  secret: null,
});

const webhooksList = ref<
  { id: string; name: string; url: string; hasSecret: boolean }[]
>([]);
const handleDelete = async (payload: {
  hasSecret: boolean;
  id: string;
  name: string;
  resource: string;
  url: string;
}) => {
  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
  });
  try {
    await ElMessageBox.confirm(
      `Destroy ${payload.resource} webhook? ${payload.url}`,
      "Warning",
      {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning",
      }
    );
    await store.Bot.deleteWebhook(payload.id);
    await webhooksFetch();
    loading.close();
    ElMessage({
      type: "success",
      message: "Delete completed",
    });
    showWebhooksForm.value = false;
  } catch (e) {
    ElMessage({
      type: "info",
      message: "Delete canceled",
    });
    loading.close();
    showWebhooksForm.value = false;

    // throw e;
  }
};

const submit = async () => {
  const { url, secret } = webhooksForm.value;

  if (url) {
    const loading = ElLoading.service({
      lock: true,
      text: "Loading",
      background: "rgba(0, 0, 0, 0.7)",
    });

    const createWebhook = async () => {
      try {
        await store.Bot.Setup(url, secret);
        ElMessage({
          type: "success",
          message: "Webhook created 🎉",
        });
        await webhooksFetch();
      } catch (e) {
        ElMessage({
          type: "error",
          message: "Error creating webhook " + e,
        });
      } finally {
        loading.close();
      }
    };

    try {
      await createWebhook();
      showWebhooksForm.value = false;
    } catch (e) {
      showWebhooksForm.value = false;
    }
  }
};

watch(
  () => store.state.tokenValid,
  async (v) => {
    if (v === true) {
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      await webhooksFetch();
      loading.close();
    }
  }
);

onMounted(async () => {
  if (store.state.tokenValid) {
    const loading = ElLoading.service({
      lock: true,
      text: "Loading",
      background: "rgba(0, 0, 0, 0.7)",
    });

    try {
      await webhooksFetch();
    } catch (e) {
      loading.close();
    }
    loading.close();
  }
});

const Bot = store.Bot;

const webhooksDeleteAll = async () => {
  let loading;
  try {
    await ElMessageBox.confirm("Destroy ALL webhooks?", "Warning", {
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
      type: "warning",
    });
    loading = ElLoading.service({
      lock: true,
      text: "Loading",
      background: "rgba(0, 0, 0, 0.7)",
    });
    await Promise.all(
      webhooksList.value.map(({ id }) => {
        return Bot.deleteWebhook(id);
      })
    );
    await webhooksFetch();
    loading.close();
  } catch (e) {
    ElMessage({
      type: "error",
      message: "Error destroying webhooks " + e,
    });
    if (loading.close) {
      loading.close();
    }
  }
};
const webhooksFetch = async () => {
  const { items } = await Bot.getWebhooks();
  webhooksList.value = items.map((webhook) => {
    return {
      id: webhook.id,
      name: webhook.name,
      url: webhook.targetUrl,
      resource: webhook.resource,
      hasSecret: Boolean(webhook.secret),
    };
  });
};
const promptNewWebhook = () => {
  showWebhooksForm.value = true;
};
</script>

<style>
.adaptive-card {
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* You can add additional styling for text colors here */
.el-input,
.el-checkbox-group,
.el-radio-group,
.el-date-picker,
.el-time-picker {
  color: var(
    --default-text-color
  ); /* You can define a CSS variable for text color */
}

/* Define other CSS classes for custom styling */
</style>
