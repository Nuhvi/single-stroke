interface ISettings {
  autoSaveTime?: number;
  display?: boolean;
  format?: string;
  framerate?: number;
  motionBlurFrames?: number;
  name?: string;
  quality?: number;
  startTime?: number;
  timeLimit?: number;
  verbose?: boolean;
  workersPath?: string;
}

declare class CCapture {
  constructor(settings: ISettings);
  capture(canvas: HTMLElement): void;
  start(): void;
  stop(): void;
  save(): void;
}
