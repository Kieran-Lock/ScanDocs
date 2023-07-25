<script lang="ts">
    import { TreeViewItem } from '@skeletonlabs/skeleton';
    import ProjectTree from './ProjectTree.svelte'
    import {activeProject} from "$lib/stores/project";
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
            {#each node.children as childType}
                {#each Object.values(childType) as children}
                    {#each children as child}
                        {#if child.children.map(childType => Object.values(childType)).map(children => children.length).every(Boolean)}
                            <ProjectTree nodes={[child]} />
                        {:else}
                            <TreeViewItem on:click={() => onClick(child)}>
                                <svelte:component this={child.component} meta={child.meta} />
                            </TreeViewItem>
                        {/if}
                    {/each}
                {/each}
            {/each}
        </svelte:fragment>
    </TreeViewItem>
{/each}
