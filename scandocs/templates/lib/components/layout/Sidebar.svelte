<script lang="ts">
    import Search from "$lib/components/Search.svelte";
    import {TreeView} from "@skeletonlabs/skeleton";
    import ProjectTree from "$lib/components/ProjectTree.svelte";

    export let project
</script>

<div class="flex flex-col min-w-[420px] card p-4 h-full gap-8 overflow-y-scroll hide-scrollbar">
    <header class="flex flex-col card justify-center items-center p-4 gap-6 variant-ringed-surface pb-6">
        <h1 class="text-2xl">{project.meta.name}</h1>
        <Search />
    </header>
    <section class="flex flex-col card justify-center items-center p-4 gap-6 variant-ringed-surface">
        <TreeView>
            <ProjectTree nodes={project.children.flat()} />
        </TreeView>
    </section>
</div>
