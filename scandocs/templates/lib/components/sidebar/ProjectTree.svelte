<script lang="ts">
    import { TreeViewItem } from '@skeletonlabs/skeleton';
    import ProjectTree from './ProjectTree.svelte'
    import {activeProject, project} from "$lib/stores/project";
    import type {Node} from "$lib/utils/types";

    export let nodes

    const onClick = (node: Node) => {
        activeProject.setActive(node)
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
