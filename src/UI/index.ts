import './component.css';

export default ({ el } = { el: 'body' }): Element | null => {
  const Container = document.querySelector(el);
  if (!Container) return null;

  const SingleStroke = `
  <div 
    id="single-storke-${(Math.random() * 1000).toFixed(0)}"
    class="single-stroke"
  >
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
  <div>
  `;

  Container.innerHTML = SingleStroke;

  return Container;
};
