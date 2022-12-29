<template>
    <h1>{{ question }}</h1>
    <n-space item-style="display: flex;" align="center">
      <n-checkbox v-model:checked="answer1" :disabled="disabled">
        {{ answers[0] }}
      </n-checkbox>
      <n-checkbox v-model:checked="answer2" :disabled="disabled">
        {{ answers[1] }}
      </n-checkbox>
      <n-checkbox v-model:checked="answer3" :disabled="disabled">
        {{ answers[2] }}
      </n-checkbox>
      <n-checkbox v-model:checked="answer4" :disabled="disabled">
        {{ answers[3] }}
      </n-checkbox>
    </n-space>
  </template>
  
  <script>
  import { defineComponent, ref } from "vue";
  import { NCheckbox, NSpace, NButton } from "naive-ui";
  
  export default defineComponent({
    props: {
        question: String,
        answers: Array,
        checkedBoxes: Array
    },
    components: {
      NCheckbox,
      NSpace,
      NButton
    },
    watch: {
        answer1(newAnswer, oldAnswer) {
            this.checkedBoxes[0] = newAnswer
        },
        answer2(newAnswer, oldAnswer) {
            this.checkedBoxes[1] = newAnswer
        },
        answer3(newAnswer, oldAnswer) {
            this.checkedBoxes[2] = newAnswer
        },
        answer4(newAnswer, oldAnswer) {
            this.checkedBoxes[3] = newAnswer
        },
    },
    setup() {
      return {
        disabled: ref(false),
        answer1: ref(false),
        answer2: ref(false),
        answer3: ref(false),
        answer4: ref(false)
      };
    }
  });
  </script>