<script>
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import FancyLink from '../components/FancyLink';
  import Uploader from '../components/Uploader';

  let mounted = false;
  let imageData;

  onMount(() => {
    mounted = true;
  });

  // $: console.log(imageData)
</script>

{#if mounted}
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
        <FancyLink href="https://twitter.com/ArNazeh">Ar Nazeh</FancyLink>
      </h2>
    </header>
    <footer>
      <p>Drag and drop an image or click to browse.</p>
    </footer>
  </div>
{/if}

<style type="scss">
  footer {
    opacity: 0.4;
    font-weight: bold;
    padding: 0 2em;
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
</style>
