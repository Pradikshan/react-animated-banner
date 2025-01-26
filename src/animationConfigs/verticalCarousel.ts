// Animation config for vertical carousel
export const verticalCarouselAnimationConfig = (
  animationDuration?: number,
  direction?: string
) => ({
  initial: { y: direction === "reverse" ? "-100%" : "100%" },
  animate: {
    y:
      direction === "reverse"
        ? ["-100%", "0%", "0%", "100%"]
        : ["100%", "0%", "0%", "-100%"],
  },
  transition: {
    repeat: Infinity,
    duration: animationDuration,
    ease: "linear",
    times: [0, 0.4, 0.6, 1],
  },
});
