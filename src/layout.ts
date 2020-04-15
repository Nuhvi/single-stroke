export default (): HTMLElement => {
  const body = document.querySelector('body');

  const main = document.createElement('main');

  main.innerHTML = `
    <div id='overlay'>
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

  if (body) {
    body.appendChild(main);
  }

  return main;
};
