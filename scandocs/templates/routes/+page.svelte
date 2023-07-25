<script>
    import {activeProject} from "$lib/stores/project";
    import SourceBlock from "$lib/components/SourceBlock.svelte";
</script>

<div class="flex w-full">
    <div class="card m-8 flex flex-col gap-4 w-[50%] p-4">
        <header>
            <h1 class="text-2xl font-bold">{activeProject.getActive($activeProject).meta.name}</h1>
        </header>
        <section>
            {#if activeProject.getActive($activeProject).meta.source}
                <SourceBlock />
            {/if}
        </section>
    </div>
</div>
