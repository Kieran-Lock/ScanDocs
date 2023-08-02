<script>
    import DescriptionBlock from "$lib/components/blocks/DescriptionBlock.svelte";
    import ParametersBlock from "$lib/components/blocks/ParametersBlock.svelte";
    import ReturnsBlock from "$lib/components/blocks/ReturnsBlock.svelte";
    import RaisesBlock from "$lib/components/blocks/RaisesBlock.svelte";
    import DeprecationBlock from "$lib/components/blocks/DeprecationBlock.svelte";
    import {activeProject} from "$lib/stores/project";
    import {onDestroy} from "svelte";

    let shortDescription
    let longDescription
    let deprecation
    let parameters
    let returns
    let raises
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const unsubscribe = activeProject.subscribe((_) => {
        const meta = activeProject.getActive($activeProject).meta
        shortDescription = meta.docstring?.meta.shortDescription
        longDescription = meta.docstring?.meta.longDescription
        deprecation = meta.docstring?.meta.deprecation
        parameters = meta.docstring?.meta.parameters
        returns = meta.docstring?.meta.returns
        raises = meta.docstring?.meta.raises
    })
    onDestroy(unsubscribe)
</script>

<div class="flex flex-col gap-6 ml-8 my-8 w-[50%]">
    <DescriptionBlock short={shortDescription} long={longDescription} />
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
