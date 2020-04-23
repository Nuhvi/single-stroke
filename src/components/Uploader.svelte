<script>
    export let imageData

    import { readFileData, isHoveringOverSelf } from '../utils'

    let draggedOver = false

    const dragOver = () => {
        draggedOver = true
    }

    function dragLeave(e) {
        if (isHoveringOverSelf(this, e)) return
        draggedOver = false
    }

    const drop = async e => {
        imageData =
            e.dataTransfer.getData('URL') ||
            (await readFileData(e.dataTransfer.files[0]))
    }

    const change = async e => {
        imageData = await readFileData(e.target.files[0])
    }
</script>

<div
    class="container"
    on:dragover|preventDefault={dragOver}
    on:dragleave={dragLeave}
    on:drop|preventDefault={drop}
>
    <div
        class="drop-zone"
        class:dragged-over={draggedOver}
        class:hidden={imageData}
    />
    <label>
        <input id="file-upload" type="file" on:change={change} />
    </label>
</div>

<style type="scss">
    .container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: inherit;
    }

    .drop-zone {
        width: 100%;
        height: 100%;

        border-radius: 20px;
        border: 2px dashed #dadada;

        &.dragged-over {
            border: 2px solid #0073c0;
            opacity: 0.5;
        }

        &.hidden {
            border: none;
        }
    }

    label {
        position: absolute;
        width: 100%;
        height: 100%;

        top: 0;
        left: 0;
        cursor: pointer;
    }

    input[type='file'] {
        display: none;
    }
</style>
