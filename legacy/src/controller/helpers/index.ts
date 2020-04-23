export const isBlockedCORS = (path: string) => {
  return fetch(
    path,
    new Request(path, {
      method: 'GET',
      mode: 'cors',
    }),
  )
    .then((res) => {
      return false;
    })
    .catch((error) => {
      return true;
    });
};

export const isImage = (src: string) => {
  return /data:image\//.test(src);
};

export const readFileData = async (file: Blob) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);

  const fileData = await new Promise((resolve, reject) => {
    reader.onload = function (event) {
      if (typeof reader.result === 'string') resolve(reader.result);
    };
  });

  if (typeof fileData !== 'string') return;

  return fileData;
};
