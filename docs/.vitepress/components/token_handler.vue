<template>
  <client-only>
    <div>
      <el-collapse accordion @change="handleChange" v-if="!skipRoomConfig">
        <el-collapse-item
          :title="label + ' Room Filter Options ' + label"
          name="2"
        >
          <el-form-item label="FULL Room Scan">
            <el-switch v-model="store.state.deepSearch" />
          </el-form-item>

          <el-form-item label="Room Type">
            <el-radio-group v-model="store.state.roomFilters.type">
              <el-radio :label="undefined">Both</el-radio>
              <el-radio :label="'group'">Group</el-radio>
              <el-radio :label="'direct'">Direct</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="Sort By">
            <el-radio-group v-model="store.state.roomFilters.sortBy">
              <el-radio :label="''">None</el-radio>
              <el-radio :label="'created'">Created</el-radio>
              <el-radio :label="'lastactivity'">Last Activity</el-radio>
              <el-radio :label="'id'">ID</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-collapse-item>
      </el-collapse>
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

      <!-- <el-switch
        v-model="store.state.deepSearch"
        label="Full Room Search"
        size="small"
      /> -->
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
import { ref } from "vue";
import { Refresh } from "@element-plus/icons-vue";
import { useCustomStore } from "./../util/store";
import { computed, watch } from "vue";
// import { ElLoading } from "element-plus";

const store = useCustomStore();
const label = ref("⭐️");
const emit = defineEmits();
const checkToken = async (tokenCandidate: string) => {
  if (tokenCandidate.length > 5) {
    await store.validateToken(tokenCandidate);
    if (store.state.tokenValid) {
      emit("tokenValidated", { valid: true });
    }
  }
};

const watchFilters = computed(() => ({
  roomFiltersSort: store.state.roomFilters.sortBy,
  roomFiltersType: store.state.roomFilters.type,
  deepSearch: store.state.deepSearch,
}));

watch(watchFilters, async (newValues, oldValues) => {
  if (store.state.token) {
    await store.validateToken(store.state.token);
  }
});

const handleChange = (val: string[]) => {
  if (val) {
    label.value = "🌟";
  } else {
    label.value = "⭐️";
  }
};

const props = defineProps({
  skipRoomConfig: {
    type: Boolean,
    default() {
      return false;
    },
  },
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
