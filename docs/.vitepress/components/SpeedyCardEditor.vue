<template>
  <client-only>
    <!-- <a @click="rootRef.rollDice()" href="#/"> pick random 🎲</a> -->
    <compact-select
      ref="rootRef"
      :labelValuePairs="samples"
      @selected="handleSelected"
    ></compact-select>

    <el-tabs v-model="activeName" :class="{ 'is-dark': isDark }">
      <el-tab-pane label="SpeedyCard editor" name="editor">
        <MonacoEditor
          @editorReady="initParent"
          @valChanged="handleChange"
          :isDark="isDark"
        />
      </el-tab-pane>
      <el-tab-pane label="Preview" name="preview">
        <el-card class="box-card">
          <AdaptiveCardRender :jsonData="jsonData" />
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="Send Message" name="sendmessage">
        <SendMsg :msg="jsonData" :showRecents="false" />
      </el-tab-pane>
    </el-tabs>
  </client-only>
</template>

<style scoped>
.blurred {
  cursor: not-allowed;
  padding: 1px 0;
  filter: blur(1.15px);
  pointer-events: none;
}
</style>

<script setup>
import { defineAsyncComponent, ref, watch, onMounted } from "vue";
import { inBrowser } from "vitepress";
import { useData } from "vitepress";
import AdaptiveCardRender from "./adaptivecard.vue";
import { useCustomStore } from "./../util/store";
import SendMsg from "./SendMsg.vue";
import CompactSelect from "./CompactSelect.vue";
import { SpeedyBot } from "../../../src"; // use speedybot for eval
import { getRandomSpeedyCard, samples } from "./../util/samples";
const store = useCustomStore();
const MonacoEditor = inBrowser
  ? defineAsyncComponent(() => import("./monaco.vue"))
  : () => null;
const rootRef = ref(null);
let editorRef = null;
const handleChange = (data) => {
  try {
    const result = eval(`
      (SpeedyBot) => {
        ${data}
        return card.build();
      }
    `)(SpeedyBot);
    jsonData.value = result;
    // jsonData.value = JSON.parse(result)
  } catch (_) {
    // if raw json, attempt to parse
    try {
      jsonData.value = JSON.parse(data);
    } catch (e) {
      console.log("Error", e, "\n--\n");
      // Treat it as simple string
      jsonData.value = String(data);
    }
  }
};

const jsonData = ref({});
const activeName = ref("editor");
const { isDark } = useData();

const initParent = (editor) => {
  editorRef = editor;
  rootRef.value.rollDice();
};

const handleSelected = (codeSnippet) => {
  if (editorRef) {
    editorRef.setValue(codeSnippet);
  }
};

const clickHandler = (e) => {
  e.preventDefault();
};
</script>
