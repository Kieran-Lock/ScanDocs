<script lang="ts">
    export let meta
</script>

<div class="w-full">
    <dt>
        {#if meta.name}
            <h3>{meta.name}</h3>
        {/if}
    </dt>
    <dd class="ml-4">
        {#if meta.description}
            {meta.description}
        {/if}
    </dd>
</div>
