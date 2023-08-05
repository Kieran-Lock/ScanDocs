<script lang="ts">
    import {selectNode} from "$lib/utils/interactivity";
    import {searchTerm} from "$lib/stores/searching"
    import type {TreeOnlyNode} from "$lib/utils/types";
    import DescriptionBlock from "$lib/components/blocks/DescriptionBlock.svelte";

    export let node: TreeOnlyNode

    const selectSearchResult = (node: TreeOnlyNode) => {
        selectNode(node)
        searchTerm.clear()
    }
</script>

<div class="btn w-[50%]" on:click={() => selectSearchResult(node)} on:keypress={() => {return false}}>
    <DescriptionBlock name={node.meta.name} short={node.meta.shortDescription} long={node.meta.longDescription}
                      isGenerator={node.meta.isGenerator} isAsync={node.meta.isAsync} isAbstract={node.meta.isAbstract}
                      isLambda={node.meta.isLambda} isContextManager={node.meta.isContextManager}
    />
</div>
