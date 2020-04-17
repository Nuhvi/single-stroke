import './component.css';
import addDragEvents from './addDragEvents';

export default ({ el } = { el: 'body' }): HTMLDivElement | null => {
  const Container = document.querySelector(el);
  if (!Container) return null;

  const SingleStroke = document.createElement('div');
  SingleStroke.id = `single-storke-${(Math.random() * 1000).toFixed(0)}`;
  SingleStroke.className = 'single-stroke';

  SingleStroke.innerHTML = `
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

  addDragEvents(SingleStroke);

  Container.appendChild(SingleStroke);

  return SingleStroke;
};
