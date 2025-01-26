import { AnimationType } from "../types/types";

export interface AnimationProps {
  initial?: { x?: string; y?: string };
  animate?: { x?: string | string[]; y?: string | string[] };
  transition?: {
    repeat?: number;
    duration?: number;
    ease?: string;
    times?: number[];
  };
}

export interface BannerProps {
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
