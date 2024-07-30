<script setup>
const { $gsap } = useNuxtApp();

onMounted(() => {
  const tl = $gsap.timeline();

  $gsap.to("#row1", {
    x: 100,
    scrollTrigger: {
      trigger: "#row1",
      start: "center 30%",
      end: "bottom center",
      scrub: true,
      markers: true,
    },
  });

  $gsap.to("#row2", {
    x: -100,
    scrollTrigger: {
      trigger: "#row2",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });

  $gsap.to("#row3", {
    x: 100,
    scrollTrigger: {
      trigger: "#row3",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });

  $gsap.to("#row4", {
    x: -100,
    scrollTrigger: {
      trigger: "#row4",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });

  $gsap.to("#row5", {
    x: 100,
    scrollTrigger: {
      trigger: "#row5",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });
});
</script>

<template>
  <section class="tiles tiles--rotated" id="grid2">
    <div class="tiles__wrap">
      <div class="tiles__line" id="row1">
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
      <div class="tiles__line" id="row2">
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
      <div class="tiles__line" id="row3">
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
      <div class="tiles__line" id="row4">
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
      <div class="tiles__line" id="row5">
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
#row1 {
  background-color: greenyellow;
}

#row2 {
  background-color: royalblue;
}

#row3 {
  background-color: seagreen;
}

#row4 {
  background-color: slateblue;
}

#row4 {
  background-color: salmon;
}

.tiles {
  --tiles-height: 52vw;
  height: var(--tiles-height);
  position: relative;
  overflow: hidden;
  background-color: var(--brand_black_3);
  /* min-height: 100vh; */
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

@media screen and (max-width: 800px) {
  .tiles {
    --tiles-height: 60vw;
    height: var(--tiles-height);
    position: relative;
    overflow: hidden;
    background-color: var(--brand_black_3);
    /* min-height: 100vh; */
  }
}
</style>
