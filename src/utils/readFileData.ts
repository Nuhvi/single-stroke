export default async (e: DragEvent) => {
  const files = e.dataTransfer?.files;
  if (!files || files?.length > 1) return;
  const file = files[0];

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
