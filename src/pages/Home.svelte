<script>
    import { fade } from 'svelte/transition'
    import { onMount } from 'svelte'
    import FancyLink from '../components/FancyLink'

    onMount(() => {
        mounted = true
    })

    let mounted = false
</script>

{#if mounted}
    <main transition:fade={{ duration: 500 }}>
        <div class="drop-zone">
            <header>
                <p>Hello👋, this is</p>
                <h1>
                    <FancyLink href="https://github.com/Nazeh/single-stroke">
                        Single Stroke
                    </FancyLink>
                </h1>
                <p>
                    Generative art 🎨 by
                    <FancyLink href="https://twitter.com/ArNazeh">
                        Ar Nazeh
                    </FancyLink>
                </p>
            </header>
            <footer>
                <p>Drag and drop an image or click to browse.</p>
            </footer>
        </div>
        <label>
            <input id="file-upload" type="file" />
        </label>
    </main>
{/if}

<style type="scss">
    main {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding: 20px;

        font-family: 'Roboto', sans-serif;
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

    .image-loaded {
        padding: 0;
    }

    .image-loaded .drop-zone {
        display: none;
    }

    .drop-zone {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        border-radius: 20px;
        border: 2px dashed #dadada;
    }

    .dragged-over .drop-zone {
        border: 2px solid #0073c0;
        opacity: 0.5;
    }

    .drop-zone h1,
    .drop-zone p {
        margin: 0;
    }

    p {
        padding: 0 1em;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    a {
        z-index: 9999;
        text-decoration: none;
        font-weight: bold;
        color: black;
        margin: 0 0.2em;
    }

    header {
        text-align: center;
        margin: 2em;
    }

    footer {
        opacity: 0.4;
        font-weight: bold;
    }

    canvas {
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05);
    }
</style>
