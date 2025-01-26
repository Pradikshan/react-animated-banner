// Animation config for carousel
export const carouselAnimationConfig = (
  animationDuration?: number,
  direction?: string
) => ({
  initial: { x: direction === "reverse" ? "-100%" : "100%" },
  animate: { x: direction === "reverse" ? "100%" : "-100%" },
  transition: {
    repeat: Infinity,
    duration: animationDuration,
    ease: "linear",
  },
});
