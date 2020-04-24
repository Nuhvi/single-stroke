<script>
  export let href;
</script>

<a {href} target="blank">
  <slot />
</a>

<style type="scss">
  a {
    z-index: 999;
    position: relative;
    font-family: 'Dancing Script', cursive;
    font-size: 1.5em;
    color: inherit;
    text-decoration: none;

    &::after {
      position: absolute;
      z-index: -1;
      content: '';
      bottom: 0;
      left: -5%;
      background-color: rgb(241, 93, 93);
      height: 0%;
      width: 110%;

      transition: all 0.1s ease-in-out;
    }

    &:hover {
      &::after {
        height: 20%;
      }
    }
  }
</style>
