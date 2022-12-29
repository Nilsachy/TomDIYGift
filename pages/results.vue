<template>
    <div class="centered-div">
        <div style="fontSize: 150px; color: rgb(175, 21, 103);">{{ result }} / 20</div>
        <div v-if="result < 20" class="text">Oups... You didn't score enough to unlock your gift. Maybe next time!</div>
        <div v-if="result === 20" class="text">Bravissimo! Your gift is coming!</div>
        <n-button @click="playAgain" strong secondary>Play Again</n-button>
    </div>
</template>

<script>
import { NButton } from "naive-ui";

export default {
    components: {
        NButton
    },
    data () {
        return {
            result: 0
        }
    },
    mounted () {
        this.findResult()
    },
    methods: {
        findResult () {
            let result = 0;
            const answersGiven = this.$store.state.answersGiven;
            const correctAnswers = this.$store.state.correctAnswers;
            console.log('Answers Given ', answersGiven);
            console.log('Correct Answers ', correctAnswers);
            for (let i = 0; i < answersGiven.length; i++) {
                if (answersGiven[i] === correctAnswers[i]) {
                    result++;
                }
            }
            this.result = result;
            if (this.result === 20) {
            setTimeout(() => {
                this.$router.push('/gift');
            }, 3000);
        }
        },
        playAgain () {
            this.$router.push('/');
        }
    }
}

</script>

<style>
.centered-div {
    width: 50%;
    height: 60%;
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
  }
  .text {
        font-size: 40px;
        margin-bottom: 40px;
        color: rgb(175, 21, 103);
  }
</style>