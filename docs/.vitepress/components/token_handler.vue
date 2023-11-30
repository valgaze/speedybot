<template>
  <client-only>
    <div>
      <el-input
        v-model="store.state.token"
        @input="checkToken(store.state.token)"
        placeholder="ex. MjhM5ZDVs3VJnsmMzVjYz..."
        show-password
        :autofocus="autofocus"
      >
        <template #prepend>
          <el-button
            @click="store.validateToken(store.state.token)"
            type="warning"
            :icon="Refresh"
            :disabled="store.state.tokenValid"
            >Check token</el-button
          >
        </template>
      </el-input>
      <el-alert
        v-if="
          store.state.tokenValid === false &&
          store.state.tokenValid !== undefined &&
          store.state.token.length > 5
        "
        title="😥 Token is INVALID (generate a new token and try again)"
        type="error"
      >
      </el-alert>
      <el-alert
        v-if="store.state.tokenValid === true && store.state.token"
        title="🎉 Token is good!"
        type="success"
      ></el-alert>
      <el-descriptions
        v-if="store.state.tokenValid === true && store.state.token && showInfo"
        direction="vertical"
        :column="3"
      >
        <el-descriptions-item label="Username">{{
          store.state.userData.username
        }}</el-descriptions-item>
        <el-descriptions-item label="Chat Email(s)">
          <a
            type="primary"
            v-for="(email, idx) in store.state.userData.emails"
            :key="email + '_' + idx"
            :href="'webexteams://im?email=' + email"
            >{{ email }}
          </a>
        </el-descriptions-item>
        <el-descriptions-item label="Type" :span="2"
          ><el-tag>{{
            store.state.userData.type
          }}</el-tag></el-descriptions-item
        >
      </el-descriptions>
    </div>
  </client-only>
</template>

<script lang="ts" setup>
import { Refresh } from "@element-plus/icons-vue";
import { useCustomStore } from "./../util/store";

const store = useCustomStore();

const emit = defineEmits();
const checkToken = async (tokenCandidate: string) => {
  if (tokenCandidate.length > 5) {
    await store.validateToken(tokenCandidate);
    if (store.state.tokenValid) {
      emit("tokenValidated", { valid: true });
    }
  }
};

const props = defineProps({
  showInfo: {
    type: Boolean,
    default() {
      return false;
    },
  },
  autofocus: {
    type: Boolean,
    default() {
      return true;
    },
  },
});
</script>
