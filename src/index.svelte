<script lang="typescript">
    const a: string = 'Svelte',
        b: string = 'Typescript',
        c: string = 'Parcel'
</script>

<h1>{a} + {b} + {c}</h1>

<style type="scss">
    h1 {
        font: normal 24pt Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
        color: dimgray;
        cursor: default;
    }

    :global(html),
    :global(body) {
        position: relative;
        box-sizing: border-box;
        height: 100%;
        font-size: 100%;
        font-family: Arial, Helvetica, sans-serif;

        width: 100%;
        max-width: 1280px;
        height: 100%;
        margin: auto;
    }
</style>
