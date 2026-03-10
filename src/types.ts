export type HoverState = {
  x: number;
  y: number;
  image: string;
  title: string;
} | null;

export type freelanceHandlers = {
  onMouseMove?: (x: number, y: number, image: string, title: string) => void;
  onMouseLeave?: () => void;
};
