<script lang="ts">
    export let parameters
</script>

{#if parameters.length}
    <div class="flex flex-col gap-2 card w-[50%] p-4 variant-glass-surface w-full">
        <header>
            <h2 class="text-2xl font-bold">Parameters</h2>
        </header>
        <section>
            {#each parameters as parameter}
                <dl class="list-d flex-auto p-2">
                    <svelte:component this={parameter.component} meta={parameter.meta} />
                    <div class="pb-2 pt-4">
                        <hr class="!border-t-2" />
                    </div>
                </dl>
            {/each}
        </section>
    </div>
{/if}
