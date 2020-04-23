export const readFileData = async (file: Blob) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)

    const fileData = await new Promise((resolve, reject) => {
        reader.onload = function(event) {
            if (typeof reader.result === 'string') resolve(reader.result)
        }
    })

    if (typeof fileData !== 'string') return

    return fileData
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
