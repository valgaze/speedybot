<template>
  <div style="background: white" v-html="cardJSON.outerHTML"></div>
</template>

<script setup>
/**
 * TODO:
 * adaptiveCard.onExecuteAction
 * subCard
 * Cool stuff:
 * - https://amdesigner.azurewebsites.net/
 * - https://messagecardplayground.azurewebsites.net/
 */
import * as AdaptiveCards from "adaptivecards";
import { ref, onMounted, watch } from "vue";

const props = defineProps({
  jsonData: {
    type: Object,
    default: () => ({
      type: "AdaptiveCard",
      version: "1.0",
      body: [
        {
          type: "Image",
          url: "https://adaptivecards.io/content/adaptive-card-50.png",
        },
        {
          type: "TextBlock",
          text: "Hello **Adaptive Cards!**",
        },
      ],
      actions: [
        {
          type: "Action.Submit",
          title: "Learn more",
          url: "https://adaptivecards.io",
        },
        {
          type: "Action.OpenUrl",
          title: "GitHub",
          url: "https://github.com/Microsoft/AdaptiveCards",
        },
      ],
    }),
  },
});

const emitKw = "valChanged";
const emit = defineEmits();
const cardJSON = ref("<div></div>");
const adaptiveCard = new AdaptiveCards.AdaptiveCard();

adaptiveCard.hostConfig = new AdaptiveCards.HostConfig({
  fontFamily: "sans-serif",
});

const buildCard = (jsonSpec) => {
  adaptiveCard.parse(jsonSpec);
  const rendered = adaptiveCard.render();

  adaptiveCard.onExecuteAction = function (action, payload) {
    emit("actionButton", { action, payload });
  };
  return rendered;
};

onMounted(() => {
  cardJSON.value = buildCard(props.jsonData);
});

watch(props, () => {
  cardJSON.value = buildCard(props.jsonData);
});
</script>

<style>
/** Styling to match final web rendering */

.ac-container .ac-textBlock {
  /* height: 100%;
  width: 100%; */
  -webkit-box-direction: normal;
  box-sizing: border-box;
  color: rgb(83, 87, 89);
  cursor: auto;
  display: block;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  font-family: "CiscoSansTT Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  letter-spacing: 0.30000001192092896px;
  line-height: 21.280000686645508px;
  overflow-x: hidden;
  overflow-y: hidden;
  text-align: start;
  white-space: pre-wrap;
  word-wrap: break-word;
}

/* .ac-container .ac-choiceSetInput-multiSelect */

.ac-container .ac-choiceSetInput-multiSelect input[type="checkbox"] {
  /* Hide the default checkbox appearance */
  appearance: none;
  -webkit-appearance: none;
  border: 2px solid #ccc;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  margin-right: 8px;
  position: relative;
  cursor: pointer;
}

/* Custom styling for unchecked checkboxes */
.ac-container
  .ac-choiceSetInput-multiSelect
  input[type="checkbox"]:not(:checked) {
  background-color: white;
}

/* Custom styling for checked checkboxes */
.ac-container .ac-choiceSetInput-multiSelect input[type="checkbox"]:checked {
  background-color: #007bff; /* Change this to your preferred color */
}

/* Style for the select element */
.ac-container .ac-multichoiceInput select {
  width: 100%;
  min-width: 0px;
  padding: 10px; /* Adjust as needed */
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: white;
  color: #333;
  font-size: 16px;
  cursor: pointer;
}

/* Style for the select options */
.ac-container .ac-multichoiceInput select option {
  background-color: white;
  color: #333;
  font-size: 16px;
}

/* Style for the select when focused */
.ac-container .ac-multichoiceInput select:focus {
  outline: none;
  border-color: #007bff; /* Change this to your preferred color */
}
.ac-input-container .ac-multichoiceInput {
  -webkit-box-direction: normal;
  align-items: flex-start;
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(210, 213, 214);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgb(210, 213, 214);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(210, 213, 214);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(210, 213, 214);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  box-sizing: border-box;
  color: rgb(83, 87, 89);
  cursor: pointer;
  display: block;
  font-family: "CiscoSansTT Regular", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 16px;
  font-style: normal;
  font-variant-caps: normal;
  font-weight: normal;
  height: 36px;
  letter-spacing: normal;
  line-height: 24px;
  margin-bottom: 2px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 2px;
  min-width: 180px;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-bottom: 6px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 6px;
  position: relative;
  text-align: left;
  text-decoration: none;
  text-indent: 0px;
  text-shadow: none;
  text-transform: none;
  transition-delay: 0s;
  transition-duration: 0.15s;
  transition-property: background-color;
  transition-timing-function: ease;
  white-space: nowrap;
  width: 180px;
  word-spacing: 0px;
  word-wrap: break-word;
  writing-mode: horizontal-tb;
}

/* Add more styling as needed */

/* Style for checkbox labels */
.ac-container .ac-choiceSetInput-multiSelect label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 10px;
}
.ac-container .ac-input-container .ac-dateInput {
  color: #535759;
  background-color: #ffffff;
  border: 1px solid #d2d5d6;
  border-radius: 4px;
  height: 36px;
}

.ac-container .ac-input-container .ac-timeInput {
  color: #535759;
  background-color: #ffffff;
  border: 1px solid #d2d5d6;
  border-radius: 4px;
  height: 36px;
}

.ac-container .ac-pushButton:hover {
  color: #ffffff;
  background-color: #007ea8;
}

.ac-container .ac-pushButton {
  -webkit-box-direction: normal;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(0, 126, 168);
  border-bottom-left-radius: 20.25px;
  border-bottom-right-radius: 20.25px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgb(0, 126, 168);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(0, 126, 168);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(0, 126, 168);
  border-top-left-radius: 20.25px;
  border-top-right-radius: 20.25px;
  border-top-style: solid;
  border-top-width: 2px;
  box-shadow: none;
  box-sizing: border-box;
  color: rgb(0, 126, 168);
  cursor: pointer;
  display: flex;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 1;
  font-family: "CiscoSansTT Regular", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 18px;
  font-style: normal;
  font-variant-caps: normal;
  font-weight: normal;
  height: 28px;
  justify-content: center;
  letter-spacing: normal;
  line-height: 27px;
  margin-bottom: 8px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 4px;
  min-width: 0px;
  overflow-x: visible;
  overflow-y: visible;
  padding-bottom: 0px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 0px;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-indent: 0px;
  text-shadow: none;
  text-transform: none;
  transition-delay: 0s;
  transition-duration: 0.15s;
  transition-property: background-color;
  transition-timing-function: ease;
  white-space: pre-wrap;
  word-spacing: 0px;
  word-wrap: break-word;
  writing-mode: horizontal-tb;
}

.ac-container .ac-multichoiceInput {
  -webkit-box-direction: normal;
  align-content: normal;
  align-items: normal;
  box-sizing: border-box;
  color: rgb(0, 0, 0);
  cursor: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", Arial, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  height: 45px;
  justify-content: normal;
  letter-spacing: 0.30000001192092896px;
  line-height: 30.857219696044922px;
  margin-bottom: 0px;
  position: relative;
  white-space: pre-wrap;
  width: 314px;
  word-wrap: break-word;
}
.ac-container .ac-textInput:hover {
  background: #dedede;
}
.ac-container .ac-textInput::placeholder {
  font-weight: bold;
  opacity: 0.5;
  color: rgb(18, 18, 18);
}
.ac-container .ac-textInput {
  -webkit-appearance: none;
  -webkit-box-direction: normal;
  align-items: flex-start;
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(210, 213, 214);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgb(210, 213, 214);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(210, 213, 214);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(210, 213, 214);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 2px;
  box-sizing: border-box;
  color: rgb(83, 87, 89);
  cursor: pointer;
  display: block;
  font-family: "CiscoSansTT Regular", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 18px;
  font-style: normal;
  font-variant-caps: normal;
  font-weight: normal;
  height: 40.5px;
  letter-spacing: normal;
  line-height: 27px;
  margin-bottom: 2.25px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 2.25px;
  min-width: 202.5px;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-bottom: 6.75px;
  padding-left: 20.25px;
  padding-right: 20.25px;
  padding-top: 6.75px;
  position: relative;
  text-align: left;
  text-decoration: none;
  text-indent: 0px;
  text-shadow: none;
  text-transform: none;
  transition-delay: 0s;
  transition-duration: 0.15s;
  transition-property: background-color;
  transition-timing-function: ease;
  white-space: nowrap;
  width: 314px;
  word-spacing: 0px;
  word-wrap: break-word;
  writing-mode: horizontal-tb;
}

.ac-container .ac-textInput .md-input__wrapper {
  -webkit-box-direction: normal;
  box-sizing: border-box;
  color: rgb(0, 0, 0);
  cursor: auto;
  display: block;
  flex-grow: 1;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", Arial, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  height: 36px;
  letter-spacing: 0.30000001192092896px;
  line-height: 24.00006103515625px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  position: relative;
  white-space: pre-wrap;
  width: 146px;
  word-wrap: break-word;
}

.md-input-container .md-input:not(.md-select__filter--input):hover,
.md-input-container .md-input:not(.md-select__filter--input).md-hover {
  -webkit-appearance: none;
  -webkit-box-direction: normal;
  -webkit-rtl-ordering: logical;
  -webkit-user-select: text;
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(210, 213, 214);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgb(210, 213, 214);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(210, 213, 214);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(210, 213, 214);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  box-sizing: border-box;
  color: rgb(83, 87, 89);
  cursor: auto;
  display: inline-block;
  font-family: "CiscoSansTT Regular", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 16px;
  font-style: normal;
  font-variant-caps: normal;
  font-weight: normal;
  height: 36px;
  letter-spacing: normal;
  line-height: normal;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  overflow-x: visible;
  overflow-y: visible;
  padding-bottom: 0px;
  padding-left: 16px;
  padding-right: 44px;
  padding-top: 0px;
  text-align: start;
  text-indent: 0px;
  text-shadow: none;
  text-transform: none;
  transition-delay: 0s;
  transition-duration: 0.15s;
  transition-property: box-shadow;
  transition-timing-function: ease-out;
  white-space: pre-wrap;
  width: 146px;
  word-spacing: 0px;
  word-wrap: break-word;
  writing-mode: horizontal-tb;
}

/** Table/fact */
.ac-factset {
  border-collapse: collapse;
  width: 100%;
  border: 2px solid #e1e1e1;
  border-radius: 5px;
}

.ac-factset tr {
  border-bottom: 1px solid #e1e1e1;
}

.ac-factset td {
  padding: 10px;
  font-family: sans-serif;
  font-size: 14px;
  color: rgb(51, 51, 51);
  font-weight: 600;
  text-align: start;
  line-height: 18.62px;
  word-wrap: break-word;
  background: #fefefe;
}

.ac-factset .ac-fact-value td {
  font-weight: 400;
}

.ac-factset td:nth-child(2) {
  width: 10px;
}
</style>
