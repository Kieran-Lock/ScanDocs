<script lang="ts">
    import { TreeViewItem } from '@skeletonlabs/skeleton';
    import ProjectTree from './ProjectTree.svelte'
    import {activeNode} from "$lib/stores/node";
    import type {Node} from "$lib/utils/types";

    export let nodes: Node[]

    const onClick = (node: Node) => {
        activeNode.setActive(node)
    }
</script>

{#each nodes as node}
    <TreeViewItem on:click={() => onClick(node)}>
        <svelte:component this={node.component} meta={node.meta} />
        <svelte:fragment slot="children">
            {#each Object.values(node.children).flat() as child}
                {#if Object.values(child.children).flat().length}
                    <ProjectTree nodes={[child]} />
                {:else}
                    <TreeViewItem on:click={() => onClick(child)}>
                        <svelte:component this={child.component} meta={child.meta} />
                    </TreeViewItem>
                {/if}
            {/each}
        </svelte:fragment>
    </TreeViewItem>
{/each}
