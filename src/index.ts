import UI from './UI/index';
import readFileData from './utils/readFileData';
import './style.css';

const SingleStroke = UI({
  el: 'body',
});

SingleStroke?.addEventListener('drop', async (e) => {
  e.stopPropagation();
  e.preventDefault();
  SingleStroke.classList.remove('dragged-over');

  // try URL or reading file
  let src = e.dataTransfer?.getData('URL') || (await readFileData(e));

  if (src) {
    SingleStroke.classList.add('imgage-loaded');
    console.log(src);
  }
});
