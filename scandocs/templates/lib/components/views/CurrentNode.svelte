<script lang="ts">
    import DescriptionBlock from "$lib/components/blocks/DescriptionBlock.svelte";
    import ParametersBlock from "$lib/components/blocks/ParametersBlock.svelte";
    import ReturnsBlock from "$lib/components/blocks/ReturnsBlock.svelte";
    import RaisesBlock from "$lib/components/blocks/RaisesBlock.svelte";
    import DeprecationBlock from "$lib/components/blocks/DeprecationBlock.svelte";
    import {onDestroy} from "svelte";
    import {activeNode} from "$lib/stores/node";
    import SourceBlock from "$lib/components/blocks/SourceBlock.svelte";
    import type {AnyMeta} from "$lib/utils/types";
    import VariablesBlock from "$lib/components/blocks/VariablesBlock.svelte";

    let meta: AnyMeta
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const unsubscribe = activeNode.subscribe((_) => {
        meta = activeNode.getActive($activeNode).meta
    })
    onDestroy(unsubscribe)
</script>

<div class="flex flex-row justify-evenly w-full p-8 gap-8">
    <div class="flex flex-col gap-6 max-w-[50%] min-w-[40%]">
        <DescriptionBlock name={meta.name} short={meta.shortDescription} long={meta.longDescription}
                          isGenerator={meta.isGenerator} isAsync={meta.isAsync} isAbstract={meta.isAbstract}
                          isLambda={meta.isLambda} isContextManager={meta.isContextManager}
        />
        {#if meta.deprecation}
            <DeprecationBlock deprecation={meta.deprecation} />
        {/if}
        {#if meta.parameters}
            <ParametersBlock parameters={meta.parameters} />
        {/if}
        {#if meta.globalVariables}
            <VariablesBlock variables={meta.globalVariables} blockTitle="Global Variables" />
        {/if}
        {#if meta.classVariables}
            <VariablesBlock variables={meta.classVariables} blockTitle="Class Variables" />
        {/if}
        {#if meta.returns}
            <ReturnsBlock returns={meta.returns} />
        {/if}
        {#if meta.raises}
            <RaisesBlock exceptions={meta.raises} />
        {/if}
    </div>
    {#if meta.source}
        <div class="w-full">
            <SourceBlock source={meta.source} signature={meta.signature} />
        </div>
    {/if}
</div>
