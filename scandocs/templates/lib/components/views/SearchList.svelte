<script lang="ts">
    import {selectNode} from "$lib/utils/interactivity";
    import {filteredNodes, searchTerm} from "$lib/stores/searching";
    import type {Node} from "$lib/utils/types";

    const selectSearchResult = (node: Node) => {
        selectNode(node)
        searchTerm.clear()
    }
</script>

<div class="flex flex-col gap-8 w-full p-8">
    {#each $filteredNodes as node}
        <div class="card variant-ghost-surface p-4 btn" on:click={() => selectSearchResult(node)} on:keypress={() => {return false}}>
            <header>
                <h3>{node.meta.name}</h3>
            </header>
        </div>
    {/each}
</div>
