<script lang="ts">
    import { TreeViewItem } from '@skeletonlabs/skeleton';
    import Tree from './Tree.svelte'

    export let nodes
</script>

{#each nodes as node}
    <TreeViewItem>
        <svelte:component this={node.component} meta={node.meta} />
        <svelte:fragment slot="children">
            {#each node.children as childType}
                {#each childType as child}
                    {#if child.children.flat().length}
                        <Tree nodes={[child]} />
                    {:else}
                        <TreeViewItem>
                            <svelte:component this={child.component} meta={child.meta} />
                        </TreeViewItem>
                    {/if}
                {/each}
            {/each}
        </svelte:fragment>
    </TreeViewItem>
{/each}
