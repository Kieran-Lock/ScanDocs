<script lang="ts">
    import {selectNodeBuilder} from "$lib/utils/interactivity";
    import type {TreeOnlyNode} from "$lib/utils/types";
    import DescriptionBlock from "$lib/components/blocks/DescriptionBlock.svelte";

    export let node: TreeOnlyNode
</script>

<div class="btn w-[50%]" on:click={selectNodeBuilder(node)} on:keypress={() => {return false}}>
    <DescriptionBlock name={node.meta.name} short={node.meta.shortDescription} long={node.meta.longDescription}
                      isGenerator={node.meta.isGenerator} isAsync={node.meta.isAsync} isAbstract={node.meta.isAbstract}
                      isLambda={node.meta.isLambda} isContextManager={node.meta.isContextManager}
    />
</div>
