import React, { useState } from "react";
import { motion } from "motion/react";

import { carouselAnimationConfig } from "../animationConfigs/carousel";
import { verticalCarouselAnimationConfig } from "../animationConfigs/verticalCarousel";
import { AnimationProps, BannerProps } from "../interface/interface";

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

  let animationProps: AnimationProps = {};

  // Logic to assign the proper animation based on the animation type that is defined
  switch (animation) {
    case "carousel":
      animationProps = carouselAnimationConfig(animationDuration, direction);
      break;

    case "verticalCarousel":
      animationProps = verticalCarouselAnimationConfig(
        animationDuration,
        direction
      );
      break;

    default:
      animationProps = {};
  }

  return (
    <>
      {!closeBanner && (
        <div
          className={`relative overflow-hidden ${width} ${height} ${padding} ${backgroundColor} ${containerStyle}`}
        >
          {/* Close icon SVG */}
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
