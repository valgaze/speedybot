---
# layout: home
outline: deep
---

## SpeedyCard Editor

<compact-select
ref="rootRef"
:labelValuePairs="samples"
@selected="handleSelected"></compact-select>

<el-tabs v-model="activeName" :class="{'is-dark': isDark}">
<el-tab-pane label="SpeedyCard editor" name="editor">

<MonacoEditor @editorReady="initParent" @valChanged="handleChange" :isDark="isDark"/>

The editor above is "live" & has type hints so you can dive in and get started with SpeedyCard. If you need some inspiration, <b><a @click="rootRef.rollDice()">
press the dice 🎲 button</a></b> to cycle through some sample SpeedyCards. You can preview the output JSON, a rendering of what it will look like and if you have a token set you can even send the card to someone.

Note: Afer you send the card to someone, if you want to collect the data from <a href="https://developer.webex.com/docs/buttons-and-cards" target="_blank">Adaptive Cards</a> or take action from it, you'll need a SpeedyBot server. You can set one up in about 15 seconds by **[clicking here](./new.md)**

</el-tab-pane>
<el-tab-pane label="JSON (output)" name="json">

```json-vue
{{ typeof jsonData === 'object' ? JSON.stringify(jsonData, null, 2) : jsonData }}
```

</el-tab-pane>
<el-tab-pane label="Preview" name="preview">
<el-card class="box-card">
  <AdaptiveCardRender :jsonData="jsonData"/>
</el-card>
</el-tab-pane>
<el-tab-pane label="Send Msg" name="sendmessage">
<SendMsg :msg="jsonData">

::: details 📌 Sending Adaptive Cards: Personal Access Token

Did you know there's a nifty way to send adaptive cards using a your own accont instead of your bot's?

Check out the process here: <a href="https://developer.webex.com/docs/getting-your-personal-access-token" style="color:#646cff;text-decoration: bold;">https://developer.webex.com/docs/getting-your-personal-access-token</a>

Heads up-- unlike a bot token, a personal access token will self-destruct after 12 hours

:::

</SendMsg>
</el-tab-pane>
</el-tabs>

<script setup>
import { SpeedyBot } from './../src/index.ts'
import { defineAsyncComponent, ref, watch, onMounted} from 'vue';
import { inBrowser } from 'vitepress';
import { useData } from 'vitepress'
import { SpeedyCard } from './../src/cards.ts'
import AdaptiveCardRender from './.vitepress/components/adaptivecard.vue'
import SendMsg from './.vitepress/components/SendMsg.vue'
import CompactSelect from './.vitepress/components/CompactSelect.vue';
import { getRandomSpeedyCard, samples, cardRoster} from './.vitepress/util/samples'
const MonacoEditor = inBrowser
  ? defineAsyncComponent(() => import('./.vitepress/components/monaco.vue'))
  : () => null;
const rootRef = ref(null)
let editorRef = null
const handleChange = (data) => {
    try {
    const result = eval(`
      (SpeedyBot) => {
        ${data}
        return card.build();
      }
    `)(SpeedyBot);
      jsonData.value = result
      // jsonData.value = JSON.parse(result)
    } catch(_) {
      // if raw json, attempt to parse
      try {
        jsonData.value = JSON.parse(data)
      } catch(e) {
        console.log('Error', e, '\n--\n')
        // Treat it as simple string
        jsonData.value = String(data)
      }
    }
}
const pageReady = ref(false)
const jsonData = ref({})
const activeName = ref('editor')
const { isDark, } = useData()

const initParent = (editor) => {
  editorRef = editor
  const urlParams = new URLSearchParams(window.location.search);
  const card = urlParams.get('card');
  if (card === null) {
    rootRef.value.rollDice()
  } else {
    const paramToIdx = cardRoster.findIndex(x => x === card)
    rootRef.value.rollDice(paramToIdx)
  }

  pageReady.value = true
}
const handleSelected = (codeSnippet) => {
  if (editorRef) {
    editorRef.setValue(codeSnippet)
  }
}
</script>
