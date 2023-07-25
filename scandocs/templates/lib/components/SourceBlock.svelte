<script lang="ts">
    import {CodeBlock, RadioGroup, RadioItem, SlideToggle} from "@skeletonlabs/skeleton";
    import {activeProject} from "$lib/stores/project";
    import {onDestroy} from "svelte";

    let isSignature = false
    let meta
    const unsubscribe = activeProject.subscribe((value) => {
        meta = activeProject.getActive($activeProject).meta
    });

    onDestroy(unsubscribe);
</script>

<div class="flex flex-col items-end gap-2 card w-[50%] p-4">
    <header class="flex flex-row justify-between items-center w-full pl-1.5 pr-1">
        <h2 class="text-2xl font-bold">{activeProject.getActive($activeProject).meta.name}</h2>
        {#if meta.signature}
            <RadioGroup rounded="rounded-container-token">
                <RadioItem bind:group={isSignature} name="toggle" value={false}>Source</RadioItem>
                <RadioItem bind:group={isSignature} name="toggle" value={true}>Signature</RadioItem>
            </RadioGroup>
        {/if}
    </header>
    {#if meta.source}
        <section class="w-full mx-1">
            <CodeBlock class="w-full" language="Python" code={isSignature ? meta.signature : meta.source}></CodeBlock>
        </section>
    {/if}
</div>
