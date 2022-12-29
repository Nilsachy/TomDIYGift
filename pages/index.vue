<template>
    <div class="centered-div">
      <h1 class="welcome-message">{{message}}</h1>
      <button class="play-button" @click="play">
          <n-icon size="200px" color="rgb(175, 21, 103);">
            <PlayCircleOutline />
          </n-icon>
      </button>
      <h3 style="color: rgb(175, 21, 103);">Start playing</h3>
    </div>
  </template>
  
  <script>
  import { PlayCircleOutline } from "@vicons/ionicons5";
  import { NIcon, NButton } from "naive-ui";
  
  export default {
    components: {
      PlayCircleOutline,
      NIcon,
      NButton
    },
    data() {
      return {
        message: "Hello Kaja & Tom!"
      }
    },
    methods: {
      play (event) {
        this.$router.push('/play');
      }
    }
  }
  </script>
  
  <style scoped>
  .centered-div {
    width: 50%;
    height: 70%;
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
  }
  
  .welcome-message {
    font-size: 100px;
    color: rgb(175, 21, 103);
  }
  
  .play-button {
    border-radius: 200px;
    background-color: transparent;
    border-width: 0;
  }
  
  .play-button:hover {
    cursor: pointer;
    background-color: rgba(0,0,0,.05);
  }
  
  </style>
  
  