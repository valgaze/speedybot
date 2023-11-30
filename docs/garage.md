---
# layout: home
outline: deep
---

## SpeedyBot Garage 🤖🔧

The Garage is your one-stop-shop to manage webhooks, send messages, and build SpeedyCards (which **[render down to Adaptive Cards 🔗](https://developer.webex.com/docs/api/guides/cards)**)

<span v-if="!store.state.tokenValid">Enter your token below to get started</span>

<TokenInput :showInfo="true" />

<el-tabs v-model="activeName" :class="{'is-dark': isDark}">

<el-tab-pane label="SpeedyCard editor" name="editor">

<compact-select
ref="selectRef"
:labelValuePairs="samples"
@selected="handleSelected"></compact-select>

<MonacoEditor @editorReady="initParent" @valChanged="handleChange" :isDark="isDark"/>

The editor above is "live" & has type hints so you can dive in and get started with SpeedyCard. If you need some inspiration, <b><a style="cursor: pointer !important" @click="selectRef.rollDice()">
press the dice 🎲 button</a></b> to cycle through some sample SpeedyCards. You can preview the output JSON, a rendering of what it will look like and if you have a token set you can even send the card to someone.

Note: Afer you send the card to someone, if you want to collect the data from <a href="https://developer.webex.com/docs/buttons-and-cards" target="_blank">Adaptive Cards</a> or take action from it, you'll need a SpeedyBot server. You can set one up in about 15 seconds by
</el-tab-pane>
<el-tab-pane label="JSON (output)" name="json"  v-if="needsSpeedCardHelpers">

```json-vue

    {{ typeof jsonData === 'object' ? JSON.stringify(jsonData, null, 2) : jsonData }}
```

</el-tab-pane>
<el-tab-pane label="Preview" name="preview" v-if="needsSpeedCardHelpers">
<el-card class="box-card">
  <AdaptiveCardRender :jsonData="jsonData" />
</el-card>
</el-tab-pane>
<el-tab-pane label="Send Msg" name="sendmessage">
<SendMsg  :skipTokenCheck="true" :msg="jsonData" />
</el-tab-pane>
<el-tab-pane label="Webhooks" name="webhook">
<Webhooks> </Webhooks>
</el-tab-pane>
</el-tabs>

<script setup>
import { SpeedyBot, SpeedyCard } from './../src/index.ts'
import { defineAsyncComponent, ref, watch, onMounted} from 'vue';
import { inBrowser } from 'vitepress';
import { useData } from 'vitepress'
import TokenInput from './.vitepress/components/token_handler.vue'
import Webhooks from './.vitepress/components/webhooks.vue'
import Blur from './.vitepress/components/Blur.vue'
import AdaptiveCardRender from './.vitepress/components/adaptivecard.vue'
import { useCustomStore } from './.vitepress/util/store'
import SendMsg from './.vitepress/components/SendMsg.vue'
import CompactSelect from './.vitepress/components/CompactSelect.vue';
import { getRandomSpeedyCard, samples } from '././.vitepress/util/samples'
const store = useCustomStore()
const needsSpeedCardHelpers = ref(false)
const initialHasRan = ref(false)
const MonacoEditor = inBrowser
  ? defineAsyncComponent(() => import('.vitepress/components/monaco.vue'))
  : () => null;
const selectRef = ref(null)
let editorRef = null
const handleChange = (data) => {
  if (!needsSpeedCardHelpers.value && initialHasRan.value) {
  needsSpeedCardHelpers.value = true
  }

  if (!initialHasRan.value) {
    initialHasRan.value = true
  }

    try {
      // 🤫 
    const result = eval(`
      (SpeedyBot) => {
        ${data}
        return card.build();
      }
    `)(SpeedyBot);
      jsonData.value = result
      // jsonData.value = JSON.parse(result)
    }catch(_) {
      // if raw json, attempt to parse
      try {
        jsonData.value = JSON.parse(data)
      }catch(e) {
        console.log('Error', e, '\n--\n')
        // Treat it as simple string
        jsonData.value = String(data)
      }
    }
}


const jsonData = ref({})
const activeName = ref('editor')
const { isDark } = useData()

const initParent = (editor) => {
  editorRef = editor
  selectRef.value.rollDice()
}

const handleSelected = (codeSnippet) => {
  if (editorRef) {
    editorRef.setValue(codeSnippet)
  }
}




</script>
