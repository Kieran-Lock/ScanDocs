<script lang="ts">
    export let short
    export let long
</script>

<div>
    {#if short}
        <h2>{short}</h2>
    {/if}
    {#if long}
        <p>{long}</p>
    {/if}
</div>
