<script>
    import { fade } from 'svelte/transition'
    import { onMount } from 'svelte'
    import FancyLink from '../components/FancyLink'
    import Uploader from '../components/Uploader'

    let mounted = false
    let imageData

    onMount(() => {
        mounted = true
    })

    // $: console.log(imageData)
</script>

<main on:dragover|preventDefault={() => {}} on:drop|preventDefault={() => {}}>
    {#if mounted && !imageData}
        <div in:fade={{ duration: 500 }}>
            <header>
                <p>Hello👋, this is</p>
                <h1>
                    <FancyLink href="https://github.com/Nazeh/single-stroke">
                        Single Stroke
                    </FancyLink>
                </h1>
                <h2>
                    <span>Generative art 🎨 by</span>
                    <FancyLink href="https://twitter.com/ArNazeh">
                        Ar Nazeh
                    </FancyLink>
                </h2>
            </header>
            <footer>
                <p>Drag and drop an image or click to browse.</p>
            </footer>
        </div>
    {/if}
    <Uploader bind:imageData />
</main>

<style type="scss">
    main {
        position: relative;
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding: 20px;
        background-color: white;
        box-shadow: 0 0 5px #0001;

        font-family: 'Roboto', sans-serif;
        text-align: center;

        footer {
            opacity: 0.4;
            font-weight: bold;
        }
        header {
            margin: 2em;

            h1,
            h2,
            p {
                margin: 0;
            }
            h2 {
                padding: 0 1em;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                text-align: center;
                font-weight: normal;
                font-size: 1em;

                span {
                    margin: 0 0.2em;
                }
            }
        }
    }
</style>
