<script lang="ts">
    export let meta
</script>

<div class="flex flex-row">
    <h3>{meta.name}</h3>
    {#if meta.annotation}
        <h3>: {meta.annotation}</h3>
    {/if}
</div>
