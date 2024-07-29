<script setup>
import LocomotiveScroll from "locomotive-scroll";
// onMounted(() => {
//     if (typeof document !== 'undefined') {
//     const scroll = new LocomotiveScroll({
//       el: document.querySelector("[data-scroll-container]"),
//       smooth: true,
//     });
//   }
// });
</script>

<template>
  <section class="tiles tiles--rotated" id="grid2">
    <div class="tiles__wrap">
      <div
        class="tiles__line"
        data-scroll
        data-scroll-speed="1"
        data-scroll-target="#grid2"
        data-scroll-direction="horizontal"
      >
        <div class="tiles__line-img"></div>
        <div class="tiles__line-img"></div>
        <div class="tiles__line-img"></div>
        <div
          class="tiles__line-img"
          style="background-image: url(/4.jpg)"
        ></div>
        <div
          class="tiles__line-img"
          style="background-image: url(/5.jpg)"
        ></div>
        <div
          class="tiles__line-img"
          style="background-image: url(/6.jpg)"
        ></div>
      </div>
      <div
        class="tiles__line"
        data-scroll
        data-scroll-speed="-1"
        data-scroll-target="#grid2"
        data-scroll-direction="horizontal"
      >
        <div class="tiles__line-img"></div>
        <div
          class="tiles__line-img"
          style="background-image: url(/8.jpg)"
        ></div>
        <div
          class="tiles__line-img"
          style="background-image: url(/9.jpg)"
        ></div>
        <div
          class="tiles__line-img"
          style="background-image: url(/10.jpg)"
        ></div>
        <div
          class="tiles__line-img"
          style="background-image: url(/11.jpg)"
        ></div>
        <div
          class="tiles__line-img"
          style="background-image: url(/12.jpg)"
        ></div>
      </div>
      <div
        class="tiles__line"
        data-scroll
        data-scroll-speed="1"
        data-scroll-target="#grid2"
        data-scroll-direction="horizontal"
      >
        <div
          class="tiles__line-img"
          style="background-image: url(/13.jpg)"
        ></div>
        <div
          class="tiles__line-img"
          style="background-image: url(/14.jpg)"
        ></div>
        <div
          class="tiles__line-img"
          style="background-image: url(/15.jpg)"
        ></div>
        <div
          class="tiles__line-img"
          style="background-image: url(/16.jpg)"
        ></div>
        <div
          class="tiles__line-img"
          style="background-image: url(/17.jpg)"
        ></div>
        <div
          class="tiles__line-img"
          style="background-image: url(/18.jpg)"
        ></div>
      </div>
      <div
        class="tiles__line"
        data-scroll
        data-scroll-speed="-1"
        data-scroll-target="#grid2"
        data-scroll-direction="horizontal"
      >
        <div
          class="tiles__line-img"
          style="background-image: url(/19.jpg)"
        ></div>
        <div
          class="tiles__line-img"
          style="background-image: url(/20.jpg)"
        ></div>
        <div
          class="tiles__line-img"
          style="background-image: url(/21.jpg)"
        ></div>
        <div
          class="tiles__line-img"
          style="background-image: url(/22.jpg)"
        ></div>
        <div
          class="tiles__line-img"
          style="background-image: url(/23.jpg)"
        ></div>
        <div class="tiles__line-img"></div>
      </div>
      <div
        class="tiles__line"
        data-scroll
        data-scroll-speed="1"
        data-scroll-target="#grid2"
        data-scroll-direction="horizontal"
      >
        <div class="tiles__line-img"></div>
        <div
          class="tiles__line-img"
          style="background-image: url(/26.jpg)"
        ></div>
        <div
          class="tiles__line-img"
          style="background-image: url(/27.jpg)"
        ></div>
        <div
          class="tiles__line-img"
          style="background-image: url(/28.jpg)"
        ></div>
        <div class="tiles__line-img"></div>
        <div class="tiles__line-img"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tiles {
  --tiles-height: 52vw;
  height: var(--tiles-height);
  position: relative;
  overflow: hidden;
  background-color: var(--brand_black_3);
}

.tiles__wrap {
  width: 150%;
  --tileswrap-height: var(--tiles-height);
  height: var(--tileswrap-height);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
}

.tiles--rotated .tiles__wrap {
  --tileswrap-height: calc(var(--tiles-height) * 1.8);
  transform: translate3d(-50%, -50%, 0) rotate(22.5deg);
}

.tiles__line {
  display: flex;
}

.tiles--oneline .tiles__line {
  height: 100%;
}

.tiles--small .tiles__line {
  height: 100%;
}

.tiles__line-img {
  --tile-margin: 2vw;
  flex: none;
  width: calc(16.6666% - var(--tile-margin) * 2);
  height: calc(var(--tileswrap-height) / 3 - (3 * var(--tile-margin) / 2));
  margin: var(--tile-margin);
  background-size: cover;
  background-position: 50% 50%;
}

.tiles--rotated .tiles__line-img {
  --tile-margin: 1vw;
  width: calc(16.6666% - var(--tile-margin) * 2);
  height: calc(var(--tileswrap-height) / 5 - (4 * var(--tile-margin) / 2));
}
</style>
