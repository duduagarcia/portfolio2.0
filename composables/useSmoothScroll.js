import Lenis from "lenis";

export const useSmoothScroll = () => {
  const { $gsap } = useNuxtApp();

  const scrollLenis = new Lenis({
    duration: 1.2,
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
  });

  $gsap.ticker.add((time) => {
    scrollLenis.raf(time * 1000);
  });

  $gsap.ticker.lagSmoothing(0);
};
