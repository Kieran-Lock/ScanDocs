<script lang="ts">
    export let meta
</script>

<dt>
    <div class="flex flex-row">
        <h3>{meta.name}</h3>
    </div>
</dt>
<dd class="ml-4">
    {#if meta.description}
        {meta.description}
    {/if}
</dd>
