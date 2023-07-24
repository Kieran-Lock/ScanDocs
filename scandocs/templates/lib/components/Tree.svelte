<script lang="ts">
    import type {Node} from "$lib/utils/types";
    import Tree from './Tree.svelte';
    import {TreeViewItem} from "@skeletonlabs/skeleton";
    export let nodes: Node
</script>

{#each nodes as node}
    <TreeViewItem>
        <svelte:component this={node.component} meta={node.meta} />
        <svelte:fragment slot="children">
            <Tree nodes={node.children.flat()} />
        </svelte:fragment>
    </TreeViewItem>
{/each}
<!--node.children.flat().length !== 0-->
