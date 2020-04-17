import UI from './view/index';
import './style.css';
import readFileData from './utils/readFileData';
import Controller from './controller/index';

const SingleStroke = UI({
  el: 'body',
});

const controller = SingleStroke && Controller(SingleStroke);

SingleStroke?.addEventListener('drop', async (e) => {
  e.preventDefault();
  SingleStroke.classList.remove('dragged-over');

  // try URL or reading file
  let src =
    e.dataTransfer?.getData('URL') ||
    (e.dataTransfer?.files && (await readFileData(e.dataTransfer?.files[0])));

  controller?.startCanvas(src);
});

SingleStroke?.addEventListener('change', async (e) => {
  e.preventDefault();
  const src =
    e.target instanceof HTMLInputElement &&
    e.target.files &&
    (await readFileData(e.target.files[0]));

  controller?.startCanvas(src);
});
