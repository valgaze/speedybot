<template>
  <div
    ref="editor"
    id="boomy"
    :style="{ width: config.width, height: config.height }"
  ></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

const props = defineProps({
  isDark: Boolean,
});

const emit = defineEmits();

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === "json") {
      return new jsonWorker();
    }
    if (label === "css" || label === "scss" || label === "less") {
      return new cssWorker();
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker();
    }
    if (label === "typescript" || label === "javascript") {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

onMounted(() => {
  try {
    monaco.languages.typescript.javascriptDefaults.addExtraLib(
      `
  declare class SpeedyBot {
    constructor(token?:string)
    card(): CardBuilder;
    appCard(appName: string,logoUrl: string,config: Omit<HeaderConfig, "iconURL"> = {}):CardBuilder

  }
   type SurveyQuestionType =
  | "text"
  | "single-select"
  | "multi-select"
  | "picker-dropdown"
  | "picker-date"
  | "picker-time"
  | "textarea";

  type ColorChoices =
  | "Default"
  | "Dark"
  | "Light"
  | "Accent"
  | "Good"
  | "Warning"
  | "Attention"
  | "blue"
  | "red"
  | "green"
  | "yellow";

  type AlignmentChoices = "Left" | "Center" | "Right";

 interface SurveyQuestion {
  type: SurveyQuestionType | string;
  question: string;
  choices?: Array<string | number>; // Relevant for 'single-select', 'multi-select', 'picker-dropdown'
  id?: string;
}

type HeaderConfig = {
  iconURL?: string;
  backgroundColor?: ColorChoices;
  rtl?: boolean;
  iconSize?: SizeChoices;
  iconAlignment?: AlignmentChoices;
  iconWidth?: number;
  iconRound?: boolean;
  textSize?: SizeChoices;
  textAlign?: AlignmentChoices;
  textColor?: ColorChoices;
};
type SizeChoices =
  | "Small"
  | "Default"
  | "Medium"
  | "Large"
  | "ExtraLarge"
  | "Stretch";


  declare class CardBuilder {
    addBlock(
    content: string | CardBuilder,
    config: {
      backgroundColor?: ColorChoices;
      vertAlign?: VAlignChoices;
    } = {}
  ): CardBuilder;
    addHeader(text: string, config: HeaderConfig = {}): CardBuilder
    addTitle(title: string): CardBuilder;
    addSubtitle(subtitle: string): CardBuilder;
    addSubcard(card:CardBuilder, textLabel?: string):CardBuilder;
    setImage(url: string): CardBuilder
    addImage(
    url: string,
    config: {
      size?: SizeChoices;
      align?: AlignmentChoices;
      targetURL?: string;
    } = {}): CardBuilder;
    addTable(input: (string | number)[][] | { [key: string]: string | number }, separator?: boolean): CardBuilder;
    addText(    text: string,
    config: {
      size?: SizeChoices;
      align?: AlignmentChoices;
      color?: ColorChoices;
      backgroundColor?: ColorChoices;
      vertAlign?: VAlignChoices;
    } = {}): CardBuilder;
    addChips(
    chips: (string | { title: string; value?: string })[],
    id?:string): CardBuilder;
    addLinkButton(url: string, label?: string): CardBuilder;
    addPickerDropdown(choices: (string | number)[], id?: string): CardBuilder;
    addSingleSelect(choices: (string | number)[], id?: string): CardBuilder;
    addMultiSelect(choices: (string | number)[], id?: string): CardBuilder;
    addPickerDate(textLabel: string, id?: string): CardBuilder;
    addPickerTime(textLabel: string, id?: string): CardBuilder;
    addTextInput(placeholder: string, id?: string): CardBuilder;
    addTextarea(placeholder: string, id?: string): CardBuilder;
    setBackgroundImage(url: string): CardBuilder;
    setSubmitButtonTitle(label: string): CardBuilder;
    survey(questions: SurveyQuestion[], title = "📝 Survey"):CardBuilder;
    attachData(payload: [key: string:]: any): CardBuilder
    addButton(label: string,id = "button_result", attachedData: string | { [key: string]: number | string | boolean} = {}): CardBuilder
  }
`,
      "filename/types.d.ts"
    );

    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
      ...monaco.languages.typescript.javascriptDefaults.getDiagnosticsOptions(),
      noSemanticValidation: false,
      noSuggestionDiagnostics: false,
      noSyntaxValidation: false,
      diagnosticCodesToIgnore: [2451],
    });

    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      ...monaco.languages.typescript.javascriptDefaults.getCompilerOptions(),
      checkJs: true, // need this
    });

    // monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    // });

    const editor = monaco.editor.create(
      document.querySelector("#boomy") as HTMLElement,
      {
        // value: default_code,
        language: "javascript",
        minimap: { enabled: false },
      }
    );

    if (props.isDark) {
      monaco.editor.setTheme("vs-dark");
    } else {
      monaco.editor.setTheme("vs");
    }

    // Capture changes
    editor.onDidChangeModelContent(async () => {
      const updatedContent = editor.getValue();
      if (updatedContent) {
        emit("valChanged", updatedContent);
      }
    });

    watch(props, ({ isDark }) => {
      if (isDark) {
        monaco.editor.setTheme("vs-dark");
      } else {
        monaco.editor.setTheme("vs");
      }
    });

    // initialization
    emit("editorReady", editor);
  } catch (e) {
    throw e;
  }
});

const config = {
  width: "600",
  height: "250px",
};
</script>

<style></style>
