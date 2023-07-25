<script lang="ts">
    import {activeProject} from "$lib/stores/project";
    import {onDestroy} from "svelte";

    let meta
    const unsubscribe = activeProject.subscribe((value) => {
        meta = activeProject.getActive($activeProject).meta
    });

    onDestroy(unsubscribe);
</script>

{#if meta.parameters}
    <div class="flex flex-col gap-2 card w-[50%] p-4">
        <header>
            <h2 class="text-2xl font-bold">Parameters</h2>
        </header>
        <section>
            {#each meta.parameters as parameter}
                <dl class="list-d flex-auto p-2">
                    <dt>
                        <svelte:component this={parameter.component} meta={parameter.meta} />
                    </dt>
                    <dd class="ml-4">
                        Parameter description
                    </dd>
                    <div class="pb-2 pt-4">
                        <hr class="!border-t-2" />
                    </div>
                </dl>
            {/each}
        </section>
    </div>
{/if}
