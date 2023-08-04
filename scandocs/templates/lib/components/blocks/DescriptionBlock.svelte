<script lang="ts">
    export let name
    export let short
    export let long
    export let isGenerator
</script>

<div class="flex flex-col card p-4 gap-4 variant-glass-surface">
    <header class="flex flex-row justify-between w-full pr-2">
        <h2 class="text-2xl font-bold">{name}</h2>
        <div>
            {#if isGenerator}
                <p class="badge variant-ghost-secondary">Generator</p>
            {/if}
        </div>
    </header>
    {#if short || long}
        <section class="w-full pt-2 flex flex-col gap-2">
            {#if short}
                <p>{short}</p>
            {/if}
            {#if long}
                <p>{long}</p>
            {/if}
        </section>
    {/if}
</div>
