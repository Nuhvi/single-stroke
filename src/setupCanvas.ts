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

  // the p5.File is not available here :/
  app.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  const getFileData = async (e: DragEvent) => {
    // try URL
    let fileData = e.dataTransfer?.getData('URL');

    // try File data
    if (!fileData) {
      const files = e.dataTransfer?.files;
      if (!files || files?.length > 1) return;
      const file = files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);

      fileData = await new Promise((resolve, reject) => {
        reader.onload = function (event) {
          if (typeof reader.result === 'string') resolve(reader.result);
        };
      });
    }

    if (typeof fileData !== 'string') return;

    return fileData;
  };

  app.addEventListener('drop', async (e) => {
    e.stopPropagation();
    e.preventDefault();
    app.className = '';

    const fileData = await getFileData(e);

    if (!fileData) return;

    app.className = 'imgage-loaded';
  });

  return [width, height];
};
