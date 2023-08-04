<script lang="ts">
    export let name: string
    export let short: string | null
    export let long: string | null
    export let isGenerator: boolean
    export let isAsync: boolean
    export let isAbstract: boolean
    export let isLambda: boolean
    export let isContextManager: boolean
</script>

<div class="flex flex-col card p-4 gap-4 variant-glass-surface">
    <header class="flex flex-row justify-between w-full pr-2">
        <h2 class="text-2xl font-bold">{name}</h2>
        <div>
            {#if isGenerator}
                <p class="badge variant-ghost-secondary">Generator</p>
            {/if}
            {#if isAsync}
                <p class="badge variant-ghost-secondary">Asynchronous</p>
            {/if}
            {#if isAbstract}
                <p class="badge variant-ghost-secondary">Abstract</p>
            {/if}
            {#if isLambda}
                <p class="badge variant-ghost-secondary">Lambda</p>
            {/if}
            {#if isContextManager}
                <p class="badge variant-ghost-secondary">Context Manager</p>
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
