<script lang="typescript">
  import Home from './components/Home.svelte';
  import Uploader from './components/Uploader.svelte';
  import App from './components/App.svelte';

  let imageData;
</script>

<main on:dragover|preventDefault={() => {}} on:drop|preventDefault={() => {}}>
  {#if !imageData}
    <Home />
  {:else}
    <App bind:imageData />
  {/if}
  <Uploader bind:imageData />
</main>

<style type="scss">
  :global(html, body) {
    position: relative;
    box-sizing: border-box;
    height: 100%;
    font-size: 100%;
    font-family: Arial, Helvetica, sans-serif;

    width: 100%;
    max-width: 1280px;
    height: 100%;
    margin: auto;

    background-color: whitesmoke;
    color: black;
  }

  main {
    position: relative;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: white;
    box-shadow: 0 0 5px #0001;

    font-family: 'Roboto', sans-serif;
    text-align: center;
  }
</style>
