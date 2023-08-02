<script lang="ts">
    import {CodeBlock, RadioGroup, RadioItem} from "@skeletonlabs/skeleton";
    import {activeProject} from "$lib/stores/project";
    import {onDestroy} from "svelte";

    export let short
    export let long

    let isSignature = false
    let meta
    const unsubscribe = activeProject.subscribe((value) => {
        meta = activeProject.getActive($activeProject).meta
    })
    onDestroy(unsubscribe)
</script>

<div class="flex flex-col gap-2 card p-4 variant-glass-surface">
    <header class="flex flex-row justify-between items-center w-full">
        <h2 class="text-2xl font-bold">{activeProject.getActive($activeProject).meta.name}</h2>
        {#if meta.signature}
            <RadioGroup rounded="rounded-container-token">
                <RadioItem bind:group={isSignature} name="toggle" value={false}>Source</RadioItem>
                <RadioItem bind:group={isSignature} name="toggle" value={true}>Signature</RadioItem>
            </RadioGroup>
        {/if}
    </header>
    {#if meta.source}
        <section class="w-full">
            <CodeBlock class="w-full" language="Python" code={isSignature ? meta.signature : meta.source}></CodeBlock>
        </section>
    {/if}
    {#if short || long}
        <footer class="w-full pt-2">
            {#if short}
                <p>{short}</p>
            {/if}
            {#if long}
                <p>{long}</p>
            {/if}
        </footer>
    {/if}
</div>
