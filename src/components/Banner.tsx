import React, { useState } from "react";
import { AnimationType } from "../types/types";
import { motion } from "motion/react";

interface BannerProps {
  backgroundColor?: string;
  width?: string;
  height?: string;
  padding?: string;
  animation?: AnimationType;
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
  animationDuration = 5,
  closeIconVisible = false,
  children,
  containerStyle,
  motionStyle,
  closeIconStyle,
}) => {
  const [closeBanner, setCloseBanner] = useState<boolean>(false);

  const carouselAnimationConfig = {
    initial: { x: "100%" },
    animate: { x: "-100%" },
    transition: {
      repeat: Infinity,
      duration: animationDuration,
      ease: "linear",
    },
  };

  const verticalCarouselAnimationConfig = {
    initial: { y: "100%" },
    animate: { y: ["100%", "0%", "0%", "-100%"] },
    transition: {
      repeat: Infinity,
      duration: animationDuration,
      ease: "linear",
      times: [0, 0.4, 0.6, 1],
    },
  };

  const springAnimationConfig = {};

  let animationProps;

  switch (animation) {
    case "carousel":
      animationProps = carouselAnimationConfig;
      break;

    case "verticalCarousel":
      animationProps = verticalCarouselAnimationConfig;
      break;

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
