import './component.css';
import addDragEvents from '../utils/addDragEvents';

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
        <a href="https://github.com/Nazeh/single-stroke">
        <h1>Single Stroke</h1>
        </a>
        <p>Generative art 🎨 by <a href="https://twitter.com/ArNazeh">Ar Nazeh</a></p>
      </header>
      <footer>
        <p>Drag and drop an image or click to browse.</p>
      </footer>
    </div>
  `;

  addDragEvents(SingleStroke);

  Container.appendChild(SingleStroke);

  return SingleStroke;
};
