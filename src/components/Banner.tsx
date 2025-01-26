import React, { useState } from "react";
import { motion } from "motion/react";

import { AnimationType } from "../types/types";

import { carouselAnimationConfig } from "../animationConfigs/carousel";
import { verticalCarouselAnimationConfig } from "../animationConfigs/verticalCarousel";

interface BannerProps {
  backgroundColor?: string;
  width?: string;
  height?: string;
  padding?: string;
  animation?: AnimationType;
  direction?: string;
  animationDuration?: number;
  closeIconVisible?: boolean;
  children?: React.ReactElement;

  containerStyle?: string;
  motionStyle?: string;
  closeIconStyle?: string;
}

const Banner: React.FC<BannerProps> = ({
  backgroundColor = "bg-black",
  width = "w-full",
  height = "h-auto",
  padding = "p-2",
  animation,
  direction,
  animationDuration = 5,
  closeIconVisible = false,
  containerStyle,
  motionStyle,
  closeIconStyle,
  children,
}) => {
  const [closeBanner, setCloseBanner] = useState<boolean>(false);

  // const carouselAnimationConfig = {
  //   initial: { x: "100%" },
  //   animate: { x: "-100%" },
  //   transition: {
  //     repeat: Infinity,
  //     duration: animationDuration,
  //     ease: "linear",
  //   },
  // };

  // const reverseCarouselAnimationConfig = {
  //   initial: { x: "-100%" },
  //   animate: { x: "100%" },
  //   transition: {
  //     repeat: Infinity,
  //     duration: animationDuration,
  //     ease: "linear",
  //   },
  // };

  // const verticalCarouselAnimationConfig = {
  //   initial: { y: "100%" },
  //   animate: { y: ["100%", "0%", "0%", "-100%"] },
  //   transition: {
  //     repeat: Infinity,
  //     duration: animationDuration,
  //     ease: "linear",
  //     times: [0, 0.4, 0.6, 1],
  //   },
  // };

  // const reverseVerticalCarouselAnimationConfig = {
  //   initial: { y: "-100%" },
  //   animate: { y: ["-100%", "0%", "0%", "100%"] },
  //   transition: {
  //     repeat: Infinity,
  //     duration: animationDuration,
  //     ease: "linear",
  //     times: [0, 0.4, 0.6, 1],
  //   },
  // };

  const springAnimationConfig = {};

  let animationProps;

  switch (animation) {
    case "carousel":
      animationProps = carouselAnimationConfig(animationDuration, direction);
      break;

    // case "reverseCarousel":
    //   animationProps = reverseCarouselAnimationConfig;
    //   break;

    case "verticalCarousel":
      animationProps = verticalCarouselAnimationConfig(
        animationDuration,
        direction
      );
      break;

    // case "reverseVerticalCarousel":
    //   animationProps = reverseVerticalCarouselAnimationConfig;
    //   break;

    case "spring":
      animationProps = springAnimationConfig;
      break;
    default:
      animationProps = "";
  }

  return (
    <>
      {!closeBanner && (
        <div
          className={`relative overflow-hidden ${width} ${height} ${padding} ${backgroundColor} ${containerStyle}`}
        >
          {closeIconVisible && (
            <svg
              className={`absolute right-0 w-6 h-6 cursor-pointer ${closeIconStyle}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              onClick={() => setCloseBanner(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}

          <motion.div
            {...animationProps}
            className={`flex items-center justify-center ${motionStyle}`}
          >
            {children}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Banner;
