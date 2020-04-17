export interface SpiralInterface {
  isAnimationComplete: boolean;
  render(): void;
}

export interface View {
  container: HTMLDivElement;
  home: () => void;
  openCanvas: () => void;
  draggedOver: () => void;
}
