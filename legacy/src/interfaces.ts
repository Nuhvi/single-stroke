export interface SpiralInterface {
  isAnimationComplete: boolean;
  grow(): void;
}

export interface View {
  container: HTMLDivElement;
  home: () => void;
  openCanvas: () => void;
  draggedOver: () => void;
}
