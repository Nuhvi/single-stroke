<script lang="typescript">
  import p5 from 'p5';
  import sketch from '../sketch';
  import { onMount } from 'svelte';

  import Menu from './Menu';

  export let imageData;

  let wrapper;
  let renderer;
  const id = `single-stroke-canvas-${Math.floor(Math.random() * 500)}`;

  onMount(() => {
    const el = document.getElementById(id);
    if (el instanceof HTMLDivElement) wrapper = el;
  });

  const resetRenderer = () => {
    if (renderer) renderer.remove();
  };

  const homeHandler = () => {
    imageData = null;
    resetRenderer();
  };

  $: {
    resetRenderer();
    renderer = new p5(p5 => sketch(p5, imageData, wrapper), wrapper);
  }
</script>

<div {id} />
<Menu {homeHandler} />

<style lang="scss">
  div {
    width: 100%;
    height: 100%;
    display: flex;
    place-content: center;
  }
</style>
