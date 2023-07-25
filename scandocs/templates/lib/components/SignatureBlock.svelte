<script lang="ts">
    import {CodeBlock, SlideToggle} from "@skeletonlabs/skeleton";
    import {activeProject} from "$lib/stores/project";

    let isSource = false
    const meta = activeProject.getActive($activeProject).meta
</script>

<div class="flex flex-col items-end gap-2">
    <div class="flex flex-row justify-between w-full">
        <p class="variant-ghost-surface rounded-3xl p-2 text-sm">Viewing {isSource ? "Source" : "Signature"}</p>
        <SlideToggle name="mode-slider" active="bg-primary-600" bind:checked={isSource} />
    </div>
    <CodeBlock class="w-full" language="Python" code={isSource ? meta.source : meta.signature}></CodeBlock>
</div>
