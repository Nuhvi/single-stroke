import UI from './view/index';
import * as p5 from 'p5';
import sketch from './sketch/index';
import readFileData from './utils/readFileData';
import './style.css';

const SingleStroke = UI({
  el: 'body',
});

let renderer: p5;

const startCanvas = (imgSrc: string | null | false | undefined) => {
  if (!imgSrc || !SingleStroke) return;

  if (renderer) renderer.remove();
  SingleStroke.classList.add('image-loaded');

  renderer = new p5((p5: p5) => sketch(p5, imgSrc, SingleStroke), SingleStroke);
};

SingleStroke?.addEventListener('drop', async (e) => {
  e.preventDefault();
  SingleStroke.classList.remove('dragged-over');

  // try URL or reading file
  let src =
    e.dataTransfer?.getData('URL') ||
    (e.dataTransfer?.files && (await readFileData(e.dataTransfer?.files[0])));

  startCanvas(src);
});

SingleStroke?.addEventListener('change', async (e) => {
  e.preventDefault();
  const src =
    e.target instanceof HTMLInputElement &&
    e.target.files &&
    (await readFileData(e.target.files[0]));

  startCanvas(src);
});
