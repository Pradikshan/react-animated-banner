import React from "react";
import { AnimationType } from "../types/types";
import { motion } from "motion/react";

interface BannerProps {
  text: string;
  textArray?: string[];
  backgroundColor?: string;
  textColor?: string;
  padding?: string;
  animation?: AnimationType;
  carouselConfig?: {
    duration?: number;
  };
}

const Banner: React.FC<BannerProps> = ({
  text,
  textArray,
  backgroundColor = "bg-black",
  textColor = "text-white",
  padding = "p-1",
  animation = "carousel",
  carouselConfig = { duration: 10 },
}) => {
  const carouselAnimationSettings = {
    initial: { x: "100%" },
    animate: { x: "-100%" },
    transition: {
      repeat: Infinity,
      duration: carouselConfig.duration,
      ease: "linear",
    },
  };

  const springAnimationConfig = {};

  const animationProps =
    animation === "carousel"
      ? carouselAnimationSettings
      : springAnimationConfig;

  return (
    <div
      className={`w-full h-auto overflow-hidden ${padding} ${backgroundColor} ${textColor}`}
    >
      {textArray ? (
        <motion.div {...animationProps} className="flex">
          {textArray.map((item, index) => (
            <div className="mx-16">
              <p className="text-center font-bold" key={index}>
                {item}
              </p>
            </div>
          ))}
        </motion.div>
      ) : (
        <motion.div {...animationProps}>
          <p className="text-center font-bold">{text}</p>
        </motion.div>
      )}
    </div>
  );
};

export default Banner;
