const isBlockedCORS = (path: string) => {
  return fetch(
    path,
    new Request(path, {
      method: 'GET',
      mode: 'cors',
    })
  )
    .then(res => {
      return false
    })
    .catch(error => {
      return true
    })
}

const isImage = (src: string) => {
  return /data:image\//.test(src)
}

export const readFileData = async (file: Blob) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)

  const fileData = await new Promise((resolve, reject) => {
    reader.onload = function(event) {
      if (typeof reader.result === 'string') resolve(reader.result)
    }
  })

  return (
    typeof fileData === 'string' &&
    isImage(fileData) &&
    !(await isBlockedCORS(fileData)) &&
    fileData
  )
}

export const isHoveringOverSelf = (parent: HTMLElement, e: DragEvent) => {
  const rect = parent.getBoundingClientRect()
  return (
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom &&
    e.clientX >= rect.left &&
    e.clientX <= rect.right
  )
}
