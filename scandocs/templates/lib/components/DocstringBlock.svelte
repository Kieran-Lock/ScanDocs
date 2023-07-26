<script lang="ts">
    import {activeProject} from "$lib/stores/project";
    import {onDestroy} from "svelte";

    let meta
    const unsubscribe = activeProject.subscribe((value) => {
        meta = activeProject.getActive($activeProject).meta
    });

    onDestroy(unsubscribe);
</script>

{#if meta.docstring}
    <div class="flex flex-col gap-2 card w-[50%] p-4">
        <header>
            <h2 class="text-2xl font-bold">Docstring</h2>
        </header>
        <section>
            <svelte:component this={meta.docstring.component} meta={meta.docstring.meta} />
        </section>
    </div>
{/if}
