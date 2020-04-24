<script>
  export let homeHandler;

  let show = true;
</script>

<div class="menu" class:show>
  <div class="container">
    <button class="back" on:click={homeHandler}>
      <svg class="svg-icon" viewBox="0 0 20 20" width="25" height="25">
        <path
          d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"
        />
      </svg>
    </button>

    <a
      target="_blank"
      href="https://twitter.com/intent/tweet?text=Checkout%20Single%20Stroke%20by%20%40arnazeh%20https%3A%2F%2Fsingle-stroke.nazeh.me%2F&original_referer=https://clicktotweet.com&related=tweetdripapp"
    >
      <svg viewBox="0 0 400 400" width="35" height="35">
        <path
          d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
        />
      </svg>
    </a>

    <button
      class="close"
      on:click={() => {
        show = false;
      }}
    >
      <svg viewBox="0 0 20 20" width="25" height="25">
        <path
          d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
        />
      </svg>
    </button>
  </div>
</div>

<style type="scss">
  .menu {
    display: none;
    &.show {
      display: block;
    }

    z-index: 99999;
    position: absolute;
    width: 100%;
    height: auto;
    left: 0;
    bottom: 0;

    padding: 2em 0;

    .container {
      width: 200px;
      max-width: 100%;
      margin: auto;
      background: #ffffffe5;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      padding: 0.5em;
      border-radius: 0.25em;

      display: flex;
      justify-content: space-around;
      align-items: center;

      a,
      button {
        font-weight: bold;
        cursor: pointer;
        display: flex;
        align-items: center;
      }

      button {
        border: none;
        background: none;
        padding: 0;
      }

      svg {
        &:hover {
          border-radius: 0.2em;
          background-color: #dddddd;
        }
      }
    }
  }
</style>
