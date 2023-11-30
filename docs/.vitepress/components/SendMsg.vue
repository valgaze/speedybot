<template>
  <client-only>
    <div v-if="showToken">
      <el-alert
        title="Paste your bot token in the field below to get started"
        type="info"
        show-icon
        v-if="!store.state.tokenValid"
      ></el-alert>
      <TokenInput
        v-if="!store.state.tokenValid && showToken"
        :autofocus="autofocus"
      />
    </div>

    <slot v-if="!store.state.tokenValid"></slot>

    <Blur :should-blur="!store.state.tokenValid">
      <el-form label-position="left" label-width="100px">
        <el-form-item label="Destination" prop="message">
          <CompactPicker
            :show-recents="showRecents"
            @valChanged="handleValChange"
            :roomList="store.state.roomList"
          ></CompactPicker>
        </el-form-item>
        <el-form-item label="Message">
          <el-input
            v-model="body"
            type="textarea"
            rows="6"
            style="width: 100%"
          />
        </el-form-item>
        <el-form-item>
          <div style="display: flex; justify-content: flex-end; width: 100%">
            <el-button type="primary" @click="send">💬 Send</el-button>
          </div>
        </el-form-item>
      </el-form>
    </Blur>
  </client-only>
</template>

<script setup>
import { ref, watch } from "vue";
import { ElLoading, ElMessage } from "element-plus";
import Blur from "./Blur.vue";
import TokenInput from "./token_handler.vue";
import CompactPicker from "./CompactPicker.vue";
import { useCustomStore } from "./../util/store";
const store = useCustomStore();
const activeName = ref("");
const list = ref([]);
const body = ref("");
const targetRoom = ref("");
const showToken = ref(true);

const props = defineProps({
  msg: {
    type: Object,
  },
  skipTokenCheck: {
    type: Boolean,
  },
  autofocus: {
    type: Boolean,
    default() {
      return true;
    },
  },
  showRecents: {
    type: Boolean,
    default() {
      return true;
    },
  },
});

watch(props, ({ msg, skipTokenCheck }) => {
  body.value = typeof msg === "string" ? msg : JSON.stringify(msg, null, 2);
  if (skipTokenCheck) {
    showToken.value = false;
  }
});

const send = async () => {
  if (!targetRoom.value) {
    return ElMessage({
      type: "error",
      message: "You need to specify a roomID or email address",
    });
  }
  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
  });
  try {
    let msg = body.value;
    //HACK for adaptive cards, otherwise pass thru string
    try {
      msg = JSON.parse(msg);
    } catch (e) {}

    await store.Bot.sendTo(targetRoom.value, msg);
    ElMessage({
      type: "success",
      message: "Message sent 🎉",
    });
  } catch (e) {
    ElMessage({
      type: "error",
      message: "Error sending message " + e,
    });
  } finally {
    loading.close();
  }
};

const handleValChange = (id) => {
  targetRoom.value = id;
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
>
