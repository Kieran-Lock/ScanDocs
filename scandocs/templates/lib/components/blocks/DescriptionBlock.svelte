<script lang="ts">
    import Badge from "$lib/components/extra/Badge.svelte";

    export let name: string
    export let short: string | null
    export let long: string | null
    export let isGenerator: boolean
    export let isAsync: boolean
    export let isAbstract: boolean
    export let isLambda: boolean
    export let isContextManager: boolean
</script>

<div class="flex flex-col card p-4 gap-4 variant-glass-surface w-full">
    <header class="flex flex-row justify-between w-full pr-2">
        <h2 class="text-2xl font-bold">{name}</h2>
        <div>
            <Badge text="Generator" isVisible={isGenerator} />
            <Badge text="Asynchronous" isVisible={isAsync} />
            <Badge text="Abstract" isVisible={isAbstract} />
            <Badge text="Lambda" isVisible={isLambda} />
            <Badge text="Context Manager" isVisible={isContextManager} />
        </div>
    </header>
    {#if short || long}
        <section class="w-full pt-2 flex flex-col gap-2 items-start">
            {#if short}
                <p>{short}</p>
            {/if}
            {#if long}
                <p>{long}</p>
            {/if}
        </section>
    {/if}
</div>
