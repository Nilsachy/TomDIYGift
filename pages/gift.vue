<template>
    <div class="centered-div">
        <n-grid :cols="3" item-responsive>
            <n-gi span="0 400:1 600:2">
    <n-carousel
      key="card"
      effect="card"
      :centered-slides="isCard"
      :slides-per-view="isCard ? 'auto' : 1"
      draggable
      style="height: 700px"
    >
      <n-carousel-item :style="{ width: isCard ? '40%' : '100%' }">
        <img
          class="carousel-img"
          src="../static/1.jpg"
        >
      </n-carousel-item>
      <n-carousel-item :style="{ width: isCard ? '40%' : '100%' }">
        <img
          class="carousel-img"
          src="../static/2.jpg"
        >
      </n-carousel-item>
      <n-carousel-item :style="{ width: isCard ? '40%' : '100%' }">
        <img
          class="carousel-img"
          src="../static/3.jpg"
        >
      </n-carousel-item>
      <n-carousel-item :style="{ width: isCard ? '40%' : '100%' }">
        <img
          class="carousel-img"
          src="../static/4.jpg"
        >
      </n-carousel-item>
      <n-carousel-item :style="{ width: isCard ? '40%' : '100%' }">
        <img
          class="carousel-img"
          src="../static/5.jpg"
        >
      </n-carousel-item>
      <n-carousel-item :style="{ width: isCard ? '40%' : '100%' }">
        <img
          class="carousel-img"
          src="../static/6.jpg"
        >
      </n-carousel-item>
      <n-carousel-item :style="{ width: isCard ? '40%' : '100%' }">
        <img
          class="carousel-img"
          src="../static/7.jpg"
        >
      </n-carousel-item>
      <n-carousel-item :style="{ width: isCard ? '40%' : '100%' }">
        <img
          class="carousel-img"
          src="../static/8.jpg"
        >
      </n-carousel-item>
      <n-carousel-item :style="{ width: isCard ? '40%' : '100%' }">
        <img
          class="carousel-img"
          src="../static/9.jpg"
        >
      </n-carousel-item>
      <n-carousel-item :style="{ width: isCard ? '40%' : '100%' }">
        <img
          class="carousel-img"
          src="../static/10.jpg"
        >
      </n-carousel-item>
      <n-carousel-item :style="{ width: isCard ? '40%' : '100%' }">
        <img
          class="carousel-img"
          src="../static/11.jpg"
        >
      </n-carousel-item>
      <n-carousel-item :style="{ width: isCard ? '40%' : '100%' }">
        <img
          class="carousel-img"
          src="../static/12.jpg"
        >
      </n-carousel-item>
      <n-carousel-item :style="{ width: isCard ? '40%' : '100%' }">
        <img
          class="carousel-img"
          src="../static/13.jpg"
        >
      </n-carousel-item>
    </n-carousel>
</n-gi>
<n-gi>

            <div class="poem-text">So Kaja and Tom, my dear friends so sweet,<br>
                I hope this gift brings joy to your feet,<br>And that the memories we make will always last,<br>
                Forever treasured, from the present to the past.<br><br>About our friendship you know it all!<br>
                I hope you’ll enjoy this gift then small,<br><br>
                Maybe you already have some guesses,<br> 
                And started searching for best pants and dresses!<br> 
                That’s a good reaction as my camera warms up!<br>
                Come on, get ready for my photoshoot, stars! </div>

</n-gi>
    </n-grid>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed } from 'vue'
  import { NCarousel, NCarouselItem, NRadioGroup, NRadioButton, NGrid, NGi } from 'naive-ui'
  
  export default defineComponent({
    components: {
        NCarousel,
        NCarouselItem,
        NRadioGroup,
        NRadioButton,
        NGrid,
        NGi
    },
    setup () {
      return {
        isCard: true,
        myEffect: 'card',
      }
    }
  })
  </script>
  
  <style scoped>
  .carousel-img {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .centered-div {
    width: 100%;
    height: 80%;
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
  }

  .poem-text {
    font-size: 22px;
    color: rgb(175, 21, 103);
    margin-right: 100px;
    margin-top: 100px;
  }
  </style>
