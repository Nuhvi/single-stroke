export default async (file: Blob) => {
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
