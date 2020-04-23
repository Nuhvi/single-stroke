<script>
    let draggedOver = false

    const isHoveringOverSelf = (parent, e) => {
        const rect = parent.getBoundingClientRect()
        return (
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom &&
            e.clientX >= rect.left &&
            e.clientX <= rect.right
        )
    }

    const dragOver = () => {
        draggedOver = true
    }

    function dragLeave(e) {
        if (isHoveringOverSelf(this, e)) return
        draggedOver = false
    }

    function drop(e, g) {
        // TODO
    }

    const change = e => {
        console.log(e)
    }
</script>

<div
    class="container"
    on:dragover|capture={dragOver}
    on:dragleave|capture={dragLeave}
    on:drop|preventDefault={event => drop(event, g)}
>
    <div class="drop-zone" class:dragged-over={draggedOver} />
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
