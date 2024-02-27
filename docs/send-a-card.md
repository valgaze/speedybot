---
# layout: home
outline: deep
---

# 🌟 Send a SpeedyCard

<div v-show="loadIt">

SpeedyCards make it speedy and easy for your WebEx bots to send beautifully formatted **[Adaptive Cards](https://developer.webex.com/docs/buttons-and-cards)** without having to wrangle with JSON

But did you know that there's a nifty way to send a SpeedyCard using your own account instead of your bot's? It's easy-as-pie 🥧 and you can do it right from this page

<img
    src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/various/speedycard.gif?raw=true"
    :style="{ filter: !isDark ? 'invert(1)' : 'none' }"
    style="
      margin: 1rem 0px;
      display: inline-block;
      max-width: 100%;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      padding: 10px;
    "
  />

## Step I: Grab Your Personal Access Token

Login and copy your personal access token here: **[https://developer.webex.com/docs/getting-your-personal-access-token](https://developer.webex.com/docs/getting-your-personal-access-token)**

Heads up-- unlike a **[bot token](https://developer.webex.com/my-apps/new/bot)**, a personal access token will automatically self-destruct after 12 hours

## Step II: Validate Your Token

Once you've got your token, pop it into the box below to validate it & review your bot's details

<TokenInput :showInfo="true" :autofocus="false"/>

## Step III: Send a SpeedyCard! 🚀

<el-tabs v-model="activeName" :class="{'is-dark': isDark}">
<el-tab-pane label="SpeedyCard editor" name="editor">

<MonacoEditor @editorReady="initParent" @valChanged="handleChange" :isDark="isDark"/>
<el-checkbox v-model="showJSON">{{ showJSON ? 'Hide JSON Output' : 'Show JSON Output' }}</el-checkbox>

The box above is "live" & has typing hints so you can dive in and get started writing SpeedyCards. If you need some inspiration, press the dice 🎲 button button to cycle through some sample SpeedyCards. You can send the card to a specific person or a room

<compact-select
ref="rootRef"
:labelValuePairs="samples"
@selected="handleSelected"></compact-select>

</el-tab-pane>
<el-tab-pane label="JSON (output)" name="json" v-if="showJSON">

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
<SendMsg :msg="jsonData"></SendMsg>
</el-tab-pane>
</el-tabs>

## (optional) Step IV: Make a Bot to Collect Data from your Cards

<el-alert
    title="⛔️ Nobody is listening"
    type="error"
  />

- You may have noticed that if you tried to submit any data back from a card-- nothing happens

- In fact, any user interaction with a card sent from {{ store.state.userData?.emails[0] ?? 'your account'}} right now results in icy radio silence, the data doesn't "go" anywhere

- If you want to collect the data from a SpeedyCard, you'll need a SpeedyBot for that. You can set one up in about 20 seconds (really) by visiting <a href="https://speedybot.js.org/new" target="_blank">https://speedybot.js.org/new</a>
  <img
      src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/various/new/card_nosubmit.gif"
      :style="{ filter: isDark ? 'invert(1)' : 'none' }"
      style="
        margin: 1rem 0px;
        display: inline-block;
        max-width: 100%;
        height: auto;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        padding: 10px;
      "
    />

</div>

<script setup>
import { SpeedyBot } from './../src/index.ts'
import { defineAsyncComponent, ref, watch, onMounted} from 'vue';
import { inBrowser } from 'vitepress';
import { useData } from 'vitepress'
import { SpeedyCard } from './../src/cards.ts'
import AdaptiveCardRender from './.vitepress/components/adaptivecard.vue'
import TokenInput from './.vitepress/components/token_handler.vue'
import SendMsg from './.vitepress/components/SendMsg.vue'
import CompactSelect from './.vitepress/components/CompactSelect.vue';
import { getRandomSpeedyCard, samples, cardRoster} from './.vitepress/util/samples'
import { useCustomStore } from "./.vitepress/util/store";
const loadIt = ref(false)

onMounted(() => {
  document.querySelector('.VPNav').style.display = 'none'
  document.querySelector('.VPSidebar').style.display = 'none'
  document.querySelector('.VPDocFooter').style.display = 'none'
  loadIt.value = true
})

const store = useCustomStore()
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
const showJSON = ref(false)
const { isDark } = useData()

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
