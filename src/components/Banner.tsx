import React, { useState } from "react";
import { AnimationType } from "../types/types";
import { motion } from "motion/react";

interface BannerProps {
  text?: string;
  textArray?: string[];
  textStyles?: string;
  backgroundColor?: string;

  textColor?: string;
  width?: string;
  height?: string;
  padding?: string;
  animation?: AnimationType;
  duration?: number;
  closeIconVisible?: boolean;
}

const Banner: React.FC<BannerProps> = ({
  text,
  textArray,
  textStyles,
  backgroundColor = "bg-black",
  textColor = "text-white",
  width = "w-full",
  height = "h-auto",
  padding = "p-1",
  animation = "carousel",
  duration = 5,
  closeIconVisible = false,
}) => {
  const [closeIcon, setCloseIcon] = useState<boolean>(closeIconVisible);
  const [closeBanner, setCloseBanner] = useState<boolean>(false);

  const carouselAnimationConfig = {
    initial: { x: "100%" },
    animate: { x: "-100%" },
    transition: {
      repeat: Infinity,
      duration: duration,
      ease: "linear",
    },
  };

  const verticalCarouselAnimationConfig = {
    initial: { y: "100%" },
    animate: { y: ["100%", "0%", "0%", "-100%"] },
    transition: {
      repeat: Infinity,
      duration: duration,
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
  }

  return (
    <>
      {!closeBanner && (
        <div
          className={`relative overflow-hidden ${width} ${height} ${padding} ${backgroundColor} ${textColor}`}
        >
          {closeIcon && (
            <svg
              className="absolute right-0 w-6 h-6 cursor-pointer"
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

          {textArray ? (
            <motion.div {...animationProps} className="flex">
              {textArray.map((item, index) => (
                <p className={`${textStyles}`} key={index}>
                  {item}
                </p>
              ))}
            </motion.div>
          ) : (
            <motion.div {...animationProps}>
              <p className={`${textStyles}`}>{text}</p>
            </motion.div>
          )}
        </div>
      )}
    </>
  );
};

export default Banner;
