<template>
  <div>
    <el-popover
      v-if="shouldBlur"
      placement="top"
      :width="300"
      trigger="hover"
      title="Validate Access Token"
      content="Enter and validate your token to proceed."
    >
      <template #reference>
        <div :style="shouldBlur ? 'cursor: not-allowed' : 'cursor: auto'">
          <div :class="{ blurred: shouldBlur }">
            <slot></slot>
          </div>
        </div>
      </template>
    </el-popover>
    <div v-else :style="shouldBlur ? 'cursor: not-allowed' : 'cursor: auto'">
      <div :class="{ blurred: shouldBlur }">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const {
  shouldBlur,
  label = "Please validate your bot token to access the content",
} = defineProps(["shouldBlur", "label"]);
const blurred = ref(false);

const updateBlur = () => {
  blurred.value = shouldBlur.value;
};

onMounted(() => {
  updateBlur();
});
</script>

<style scoped>
.blurred {
  cursor: not-allowed;
  padding: 1px 0;
  filter: blur(1.15px);
  pointer-events: none;
}
</style>
