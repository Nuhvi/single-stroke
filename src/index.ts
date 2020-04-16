import UI from './UI/index';
import * as p5 from 'p5';
import sketch from './sketch';
import readFileData from './utils/readFileData';
import './style.css';

const SingleStroke = UI({
  el: 'body',
});

let renderer: p5;

const setUpCanvas = (imgSrc: string | undefined) => {
  if (!imgSrc || !SingleStroke) return;
  if (renderer) renderer.remove();

  SingleStroke.classList.add('image-loaded');

  renderer = new p5((p5: p5) => sketch(p5, imgSrc), SingleStroke);
};

SingleStroke?.addEventListener('drop', async (e) => {
  e.stopPropagation();
  e.preventDefault();
  SingleStroke.classList.remove('dragged-over');

  // try URL or reading file
  let src = e.dataTransfer?.getData('URL') || (await readFileData(e));
  setUpCanvas(src);
});

SingleStroke?.addEventListener('click', async (e) => {
  e.stopPropagation();
  e.preventDefault();
  SingleStroke.classList.remove('dragged-over');

  setUpCanvas('s');
});
