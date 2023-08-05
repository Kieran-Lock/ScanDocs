<script lang="ts">
    import DescriptionBlock from "$lib/components/blocks/DescriptionBlock.svelte";
    import ParametersBlock from "$lib/components/blocks/ParametersBlock.svelte";
    import ReturnsBlock from "$lib/components/blocks/ReturnsBlock.svelte";
    import RaisesBlock from "$lib/components/blocks/RaisesBlock.svelte";
    import DeprecationBlock from "$lib/components/blocks/DeprecationBlock.svelte";
    import {onDestroy} from "svelte";
    import {activeNode} from "$lib/stores/node";
    import SourceBlock from "$lib/components/blocks/SourceBlock.svelte";
    import type {DeprecationTag} from "$lib/utils/types";
    import type {Node} from "$lib/utils/types";

    let shortDescription: string | null
    let longDescription: string | null
    let deprecation: DeprecationTag | null
    let parameters: Node[]
    let returns: Node[]
    let raises: Node[]
    let source: string
    let signature: string
    let name: string
    let isGenerator: boolean
    let isAsync: boolean
    let isAbstract: boolean
    let isLambda: boolean
    let isContextManager: boolean
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const unsubscribe = activeNode.subscribe((_) => {
        const meta = activeNode.getActive($activeNode)?.meta
        if (meta) {
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
            isAsync = meta.isAsync
            isAbstract = meta.isAbstract
            isLambda = meta.isLambda
            isContextManager = meta.isContextManager
        }
    })
    onDestroy(unsubscribe)
</script>

<div class="flex flex-row justify-evenly w-full p-8 gap-8">
    <div class="flex flex-col gap-6 w-full">
        <DescriptionBlock name={name} short={shortDescription} long={longDescription} isGenerator={isGenerator} isAsync={isAsync} isAbstract={isAbstract} isLambda={isLambda} isContextManager={isContextManager} />
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
