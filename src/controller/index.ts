import * as p5 from 'p5';
import sketch from '../sketch/index';

export default (container: HTMLDivElement) => {
  let renderer: p5;

  const resetView = () => {
    if (renderer) renderer.remove();
    container?.classList.remove('image-loaded');
  };

  const createCanvas = (imgSrc: string) => {
    renderer = new p5((p5: p5) => sketch(p5, imgSrc, container), container);
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

  const startCanvas = async (imgSrc: string | null | false | undefined) => {
    if (!imgSrc || !container || (await isBlockedCORS(imgSrc))) return;

    resetView();

    createCanvas(imgSrc);

    openCanvas();
  };
  return {
    startCanvas,
  };
};
