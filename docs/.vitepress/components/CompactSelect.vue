<template>
  <div>
    <el-button @click="rollDice" :type="buttonType" class="active"
      >🎲</el-button
    >
    <el-select
      v-model="selectedValue"
      filterable
      placeholder="Try out a template"
    >
      <el-option
        v-for="(pair, index) in labelValuePairs"
        :key="index"
        :label="pair.label"
        :value="pair.value"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useCustomStore } from "./../util/store";

export default {
  props: {
    labelValuePairs: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const store = useCustomStore();
    const selectedValue = ref("");
    const buttonType = store.Bot.pickRandom([
      "primary",
      "success",
      "warning",
      "danger",
    ]);
    watch(selectedValue, (value) => {
      emit("selected", value);
    });

    const rollDice = (idx) => {
      if (idx !== undefined) {
        if (props.labelValuePairs[idx] === undefined) {
          return rollDice();
        }
        selectedValue.value = props.labelValuePairs[idx].value;
        return;
      }
      const randomIndex = Math.floor(
        Math.random() * props.labelValuePairs.length
      );
      selectedValue.value = props.labelValuePairs[randomIndex].value;
    };

    return {
      buttonType,
      rollDice,
      selectedValue,
    };
  },
};
</script>
<style scoped>
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: scale(1.5);
    transform: translateX(-8px);
  }

  60% {
    transform: translateY(-8px);
  }
}

@keyframes cuteButton {
  0%,
  100% {
    transform: translateY(0) scale(1) rotate(0deg);
    opacity: 1;
  }

  25% {
    transform: translateY(-5px) scale(1.1) rotate(-5deg);
    opacity: 0.7;
  }

  50% {
    transform: translateY(0) scale(1) rotate(0deg);
    opacity: 1;
  }

  75% {
    transform: translateY(-3px) scale(1.05) rotate(5deg);
    opacity: 0.9;
  }

  80% {
    transform: translateY(-3px) scale(1.05) rotate(5deg);
    opacity: 0.9;
  }

  90% {
    transform: translateY(0) scale(1) rotate(0deg);
    opacity: 0.7;
  }

  95% {
    transform: translateY(0) scale(0.8) rotate(20deg);
    opacity: 0.3;
  }
}

.active {
  animation: cuteButton 4s ease 0.75s; /* Extend the duration and add iterations */
}
</style>
