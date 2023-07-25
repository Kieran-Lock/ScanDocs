<script lang="ts">
    import {CodeBlock, SlideToggle} from "@skeletonlabs/skeleton";
    import {activeProject} from "$lib/stores/project";
    import {onDestroy} from "svelte";

    let isSignature = false
    let meta
    const unsubscribe = activeProject.subscribe((value) => {
        meta = activeProject.getActive($activeProject).meta
    });

    onDestroy(unsubscribe);
</script>

<div class="flex flex-col items-end gap-2">
    {#if meta.signature !== undefined}
        <div class="flex flex-row justify-between w-full">
            <p class="variant-ghost-surface rounded-3xl p-2 text-sm">Viewing {isSignature ? "Signature" : "Source"}</p>
            <SlideToggle name="mode-slider" active="bg-primary-600" bind:checked={isSignature} />
        </div>
    {/if}
    <CodeBlock class="w-full" language="Python" code={isSignature ? meta.signature : meta.source}></CodeBlock>
</div>
