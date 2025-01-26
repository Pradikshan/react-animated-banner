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
