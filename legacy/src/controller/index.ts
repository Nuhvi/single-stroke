import * as p5 from 'p5';
import sketch from '../sketch/index';
import { isBlockedCORS, isImage, readFileData } from './helpers/index';

import { View } from '../interfaces';

export default (view: View) => {
  let renderer: p5;

  const startCanvas = async (src: string | null | false | undefined) => {
    if (!src || !view.container || (await isBlockedCORS(src)) || !isImage(src))
      return;

    if (renderer) renderer.remove();

    view.home();

    renderer = new p5(
      (p5: p5) => sketch(p5, src, view.container),
      view.container,
    );

    view.openCanvas();
  };

  view.container.addEventListener('drop', async (e: DragEvent) => {
    e.preventDefault();

    view.draggedOver();

    // try URL or reading file
    let src =
      e.dataTransfer?.getData('URL') ||
      (e.dataTransfer?.files && (await readFileData(e.dataTransfer?.files[0])));

    startCanvas(src);
  });

  view.container.addEventListener('change', async (e) => {
    e.preventDefault();
    const src =
      e.target instanceof HTMLInputElement &&
      e.target.files &&
      (await readFileData(e.target.files[0]));

    startCanvas(src);
  });
};
