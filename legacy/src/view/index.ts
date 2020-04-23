import './component.css';
import addDragEvents from './addDragEvents';
import { View } from '../interfaces';

const markup = `
<div class='drop-zone'>
  <header>
    <p>Hello👋, this is</p>
    <h1>
      <a href="https://github.com/Nazeh/single-stroke" target="blank">
        Single Stroke
      </a>
    </h1>
    <p>Generative art 🎨 by 
     <a href="https://twitter.com/ArNazeh" target="blank">Ar Nazeh</a>
    </p>
  </header>
  <footer>
    <p>Drag and drop an image or click to browse.</p>
  </footer>
</div>
<label>
  <input id="file-upload" type="file"/>
</label>
`;

export default ({ el } = { el: 'body' }): View => {
  const Root = document.querySelector(el);
  if (!Root) throw Error("Can't find this element");

  const container = document.createElement('div');

  Root.appendChild(container);

  container.id = `single-storke-${(Math.random() * 1000).toFixed(0)}`;
  container.className = 'single-stroke';

  container.innerHTML = markup;

  addDragEvents(container);

  const home = () => {
    container.classList.remove('image-loaded');
  };

  const openCanvas = () => {
    container.classList.add('image-loaded');
  };

  const draggedOver = () => {
    container.classList.remove('dragged-over');
  };

  return { container, home, openCanvas, draggedOver };
};
