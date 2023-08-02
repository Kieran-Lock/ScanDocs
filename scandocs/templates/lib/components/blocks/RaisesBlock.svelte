<script lang="ts">
    export let exceptions
</script>

{#if exceptions.length}
    <div class="flex flex-col gap-2 card p-4 variant-glass-surface">
        <header>
            <h2 class="text-2xl font-bold">Raises</h2>
        </header>
        <section>
            {#each exceptions as exception}
                <dl class="list-d flex-auto p-2">
                    <svelte:component this={exception.component} meta={exception.meta} />
                    <div class="pb-2 pt-4">
                        <hr class="!border-t-2" />
                    </div>
                </dl>
            {/each}
        </section>
    </div>
{/if}
