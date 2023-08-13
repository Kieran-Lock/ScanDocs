<script lang="ts">
    import { TreeViewItem } from '@skeletonlabs/skeleton';
    import ProjectTree from './ProjectTree.svelte'
    import type {Node} from "$lib/utils/types";
    import {selectNodeBuilder} from "$lib/utils/interactivity";

    export let nodes: Node[]
</script>

{#each nodes as node}
    <TreeViewItem on:click={selectNodeBuilder(node)}>
        <h3>{node.meta.name}</h3>
        <svelte:fragment slot="children">
            {#each Object.values(node.children).flat() as child}
                {#if Object.values(child.children).flat().length}
                    <ProjectTree nodes={[child]} />
                {:else}
                    <TreeViewItem on:click={selectNodeBuilder(child)}>
                        <h3>{child.meta.name}</h3>
                    </TreeViewItem>
                {/if}
            {/each}
        </svelte:fragment>
    </TreeViewItem>
{/each}
