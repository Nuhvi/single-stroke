import * as p5 from 'p5';
import sketch from '../sketch/index';

export default (container: HTMLDivElement) => {
  let renderer: p5;

  const resetView = () => {
    if (renderer) renderer.remove();
    container?.classList.remove('image-loaded');
  };

  const createCanvas = (src: string) => {
    renderer = new p5((p5: p5) => sketch(p5, src, container), container);
  };

  const openCanvas = () => {
    container.classList.add('image-loaded');
  };

  const isBlockedCORS = (path: string) => {
    return fetch(
      path,
      new Request(path, {
        method: 'GET',
        mode: 'cors',
      }),
    )
      .then((res) => {
        return false;
      })
      .catch((error) => {
        return true;
      });
  };

  const isImage = (src: string) => {
    return /data:image\//.test(src);
  };

  const startCanvas = async (src: string | null | false | undefined) => {
    if (!src || !container || (await isBlockedCORS(src)) || !isImage(src))
      return;

    resetView();

    createCanvas(src);

    openCanvas();
  };
  return {
    startCanvas,
  };
};
