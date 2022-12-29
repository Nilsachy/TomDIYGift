<template>
    <div>
    <n-space vertical>
        <div style="padding: 30px;">
      <n-steps
        size="medium"
        :current="current"
        :status="currentStatus"
      >
      <template v-for="i in 20" :key="i">
        <n-step
        />
        </template>
      </n-steps>
      </div>
      <div style="margin: auto; width: 80%; margin-top: 10px;">
        <n-grid :cols="2" :xGap="20">
        <n-gi>
      <n-card size="small" style="background-color: white; padding: 0px 20px 20px 20px; width: 100%;">
        <h1>{{ question }}</h1>
        <n-space>
            <n-grid :yGap="10" :cols="1">
                <n-gi>
                    <n-checkbox v-model:checked="answer1" size="large">
                        {{ answers[0] }}
                    </n-checkbox>
                </n-gi>
                <n-gi>
                    <n-checkbox v-model:checked="answer2" size="large">
                        {{ answers[1] }}
                    </n-checkbox>
                </n-gi>
                <n-gi>
                    <n-checkbox v-model:checked="answer3" size="large">
                        {{ answers[2] }}
                    </n-checkbox>
                </n-gi>
                <n-gi>
                    <n-checkbox v-model:checked="answer4" size="large">
                        {{ answers[3] }}
                    </n-checkbox>
                </n-gi>
            </n-grid>
        </n-space>
        <br/>
        <n-space>
        <n-button-group>
          <n-button @click="prev" :disabled="disabledPrevButton">
            <template #icon>
              <n-icon>
                <arrow-back-circle />
              </n-icon>
            </template>
          </n-button>
          <n-button @click="next" :disabled="disabledNextButton">
            <template #icon>
              <n-icon>
                <arrow-forward-circle />
              </n-icon>
            </template>
          </n-button>
          <n-button @click="finish" :disabled="disabledFinishButton" strong secondary type="primary">
              Submit
          </n-button>
        </n-button-group>
      </n-space>
      </n-card>
    </n-gi>
    <n-gi>
        <img src="../static/IMG_2867.png" style="width: 100%; height: 100%;"/>
    </n-gi>
    </n-grid>
        </div>
    </n-space>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from "vue";
  import { ArrowForwardCircle, ArrowBackCircle, Infinite } from "@vicons/ionicons5";
  import { NSteps, NStep, NButton, NButtonGroup, NSpace, NIcon, NRadioGroup, NRadioButton, NCheckbox, NGrid, NGi, NCard } from "naive-ui";
  
  export default defineComponent({
    components: {
      ArrowBackCircle,
      ArrowForwardCircle,
      NSteps,
      NStep,
      NButton,
      NButtonGroup,
      NSpace,
      NIcon,
      NRadioGroup,
      NRadioButton,
      NCheckbox,
      NGrid,
      NGi,
      NCard
    },
    data () {
        return {
            answer1: false,
            answer2: false,
            answer3: false,
            answer4: false,
            question: this.$store.getters.getQuestion(this.current),
            answers: this.$store.getters.getAnswers(this.current),
        }
    },
    watch: {
        // whenever current changes, this function will run
        current(newCurrent, oldCurrent) {
            if(newCurrent > oldCurrent) {
                this.setAnswerToStore(newCurrent-1);
            } else {
                this.setAnswerToStore(newCurrent)
            }
            this.getNewQuestionAndAnswers()
        },
    },
    computed: {
        disabledNextButton () {
            let trueAnswers = 0;
            if(this.answer1 === true) {
                trueAnswers++;
            }
            if(this.answer2 === true) {
                trueAnswers++;
            }
            if(this.answer3 === true) {
                trueAnswers++;
            }
            if(this.answer4 === true) {
                trueAnswers++;
            }
            if (trueAnswers === 1 && this.current < 20) {
                return false;
            } else {
                return true;
            }
        },
        disabledPrevButton () {
            if (this.current === 1) {
                return true;
            } else {
                return false;
            }
        },
        disabledFinishButton () {
            let trueAnswers = 0;
            if(this.answer1 === true) {
                trueAnswers++;
            }
            if(this.answer2 === true) {
                trueAnswers++;
            }
            if(this.answer3 === true) {
                trueAnswers++;
            }
            if(this.answer4 === true) {
                trueAnswers++;
            }
            if (trueAnswers === 1 && this.current === 20) {
                return false;
            } else {
                return true;
            }
        },
    },
    methods: {
        getNewQuestionAndAnswers() {
            this.question = this.$store.getters.getQuestion(this.current)
            this.answers = this.$store.getters.getAnswers(this.current)
        },
        setAnswerToStore (currentIndex) {
            let currentAnswer = "";
            if (this.answer1 === true) {
                currentAnswer = this.answers[0];
            } else if (this.answer2 === true) {
                currentAnswer = this.answers[1];
            } else if (this.answer3 === true) {
                currentAnswer = this.answers[2];
            } else if (this.answer4 === true) {
                currentAnswer = this.answers[3];
            }
            console.log(currentAnswer)
            this.$store.commit('setAnswer', {index: currentIndex, answer: currentAnswer})
            this.answer1 = false;
            this.answer2 = false;
            this.answer3 = false;
            this.answer4 = false;
        },
        finish() {
            this.setAnswerToStore(this.current);
            this.$router.push('/results');
        }
    },
    setup() {
      const currentRef = ref(1);
      return {
        currentStatus: ref("process"),
        current: currentRef,
        disabled: ref(false),
        next() {
          if (currentRef.value === null)
            currentRef.value = 1;
          else if (currentRef.value >= 20) {
            currentRef.value = null;
          } else
            currentRef.value++;
        },
        prev() {
          if (currentRef.value === 0)
            currentRef.value = null;
          else if (currentRef.value === null)
            currentRef.value = 20;
          else
            currentRef.value--;
        }
      };
    }
  });
  </script>