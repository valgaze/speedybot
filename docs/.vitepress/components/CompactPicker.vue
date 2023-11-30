<template>
  <client-only>
    <el-container>
      <el-input placeholder="Room id OR email" v-model="value">
        <template #prepend v-if="showRecents">
          <el-select
            v-model="value"
            filterable
            clearable
            placeholder="🔎  Recent Rooms"
          >
            <el-option
              v-for="item in roomList"
              :key="item.id"
              :label="item.title"
              :value="item.id"
            >
              <span style="float: left">{{ item.title }}</span>
              <span style="float: right; color: red; font-size: 13px">{{
                item.type
              }}</span>
            </el-option>
          </el-select>
        </template>
      </el-input>
    </el-container>
  </client-only>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
const props = defineProps({
  roomList: {
    type: Object,
  },
  showRecents: {
    type: Boolean,
    default() {
      return true;
    },
  },
});

const value = ref("");
const emit = defineEmits(["valChanged"]);

watch(value, (id) => {
  emit("valChanged", id);
});
</script>
