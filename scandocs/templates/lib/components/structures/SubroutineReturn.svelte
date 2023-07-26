<script lang="ts">
    export let meta
</script>

<dt>
    <h3>{meta.annotation}</h3>
</dt>
<dd class="ml-4">
    {#if meta.description}
        {meta.description}
    {/if}
</dd>
