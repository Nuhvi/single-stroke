<script>
    import { fade } from 'svelte/transition'

    export let error
</script>

{#if error}
    <div class="error" out:fade>
        <p>{error}</p>
    </div>
{/if}

<style>
    div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    p {
        color: rgb(255, 148, 148);
        border: 2px dashed rgb(255, 148, 148);

        margin: 5em 1em;
        padding: 1em;
        border-radius: 0.5em;
    }
</style>
