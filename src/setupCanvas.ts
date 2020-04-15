import * as p5 from 'p5';

export default (p5: p5, app: HTMLElement): number[] => {
  let width = app?.offsetWidth;
  let height = app?.offsetHeight;

  const canvas = p5.createCanvas(width, height);

  canvas.dragOver(() => {
    app.className = 'dragged-over';
  });

  canvas.dragLeave(() => {
    app.className = '';
  });

  app.addEventListener('dragover', (e) => {
    e.stopPropagation();
    e.preventDefault();
    app.className = 'dragged-over';
  });

  app.addEventListener('drop', (e) => {
    e.stopPropagation();
    e.preventDefault();
    app.className = '';

    const files = e.dataTransfer?.files;
    const file = files && files[0];
    if (!file?.type.match(/image.*/) || !FileReader) return;

    const reader = new FileReader();

    reader.readAsArrayBuffer;

    const data = reader.result;
    console.log(reader);
    if (!data) return;

    app.className = 'image-dropped';
  });

  return [width, height];
};
