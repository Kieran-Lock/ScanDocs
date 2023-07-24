<script>
    import {activeProject} from "$lib/stores/project";
    import {CodeBlock} from "@skeletonlabs/skeleton";
</script>

<div class="flex w-full justify-center items-center">
    <div class="card m-8 flex flex-col gap-4 items-center justify-center w-[50%] p-4">
        <header>
            <h1 class="text-2xl font-bold">{activeProject.getActive($activeProject).meta.name}</h1>
        </header>
        <section>
            {#if activeProject.getActive($activeProject).meta.source}
                <CodeBlock class="px-8" language="Python" code={activeProject.getActive($activeProject).meta.source}></CodeBlock>
            {/if}
        </section>
    </div>
</div>
