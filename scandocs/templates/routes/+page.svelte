<script lang="ts">
    import DescriptionBlock from "$lib/components/blocks/DescriptionBlock.svelte";
    import ParametersBlock from "$lib/components/blocks/ParametersBlock.svelte";
    import ReturnsBlock from "$lib/components/blocks/ReturnsBlock.svelte";
    import RaisesBlock from "$lib/components/blocks/RaisesBlock.svelte";
    import DeprecationBlock from "$lib/components/blocks/DeprecationBlock.svelte";
    import {activeProject} from "$lib/stores/project";
    import {onDestroy} from "svelte";
    import SourceBlock from "$lib/components/blocks/SourceBlock.svelte";

    let shortDescription
    let longDescription
    let deprecation
    let parameters
    let returns
    let raises
    let source
    let signature
    let name
    let isGenerator
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const unsubscribe = activeProject.subscribe((_) => {
        const meta = activeProject.getActive($activeProject).meta
        name = meta.name
        shortDescription = meta.shortDescription
        longDescription = meta.longDescription
        deprecation = meta.deprecation
        parameters = meta.parameters
        returns = meta.returns
        raises = meta.raises
        source = meta.source
        signature = meta.signature
        isGenerator = meta.isGenerator
    })
    onDestroy(unsubscribe)
</script>

<div class="flex flex-row justify-evenly w-full p-8 gap-8">
    <div class="flex flex-col gap-6 w-full">
        <DescriptionBlock name={name} short={shortDescription} long={longDescription} isGenerator={isGenerator} />
        {#if deprecation}
            <DeprecationBlock deprecation={deprecation} />
        {/if}
        {#if parameters}
            <ParametersBlock parameters={parameters} />
        {/if}
        {#if returns}
            <ReturnsBlock returns={returns} />
        {/if}
        {#if raises}
            <RaisesBlock exceptions={raises} />
        {/if}
    </div>
    {#if source}
        <div class="w-full">
            <SourceBlock source={source} signature={signature} />
        </div>
    {/if}
</div>
