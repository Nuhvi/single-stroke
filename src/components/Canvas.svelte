<script lang="typescript">
  import p5 from 'p5';
  import sketch from '../sketch';
  import { onMount } from 'svelte';

  export let imageData;

  let wrapper;
  let renderer;
  const id = `single-stroke-canvas-${Math.floor(Math.random() * 500)}`;

  onMount(() => {
    const el = document.getElementById(id);
    if (el instanceof HTMLDivElement) wrapper = el;
  });

  $: {
    if (renderer) renderer.remove();
    renderer = new p5(p5 => sketch(p5, imageData, wrapper), wrapper);
  }
</script>

<div {id} />

<style>
  div {
    width: 100%;
    height: 100%;
  }
</style>
