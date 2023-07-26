<script lang="ts">
    export let meta
</script>

<dt>
    <div class="flex flex-row">
        <h3>{meta.name}</h3>
        {#if meta.annotation}
            <h3>: {meta.annotation}</h3>
        {/if}
    </div>
</dt>
<dd class="ml-4">
    {#if meta.description}
        {meta.description}
    {/if}
</dd>
