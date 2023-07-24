<script lang="ts">
    export let meta
</script>

<div>
    <h1 class="font-bold text-lg">Structure: Class</h1>
    {#each Object.entries(meta) as [attribute, value]}
        <p class="capitalize">{attribute}: {value}</p>
    {/each}
</div>
