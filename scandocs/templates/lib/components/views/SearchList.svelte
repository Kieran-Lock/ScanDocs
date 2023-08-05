<script lang="ts">
    import {filteredNodes} from "$lib/stores/searching"
    import SearchResult from "$lib/components/navigation/SearchResult.svelte";
</script>

<div class="flex flex-col gap-2 w-full p-8 items-center">
    {#each $filteredNodes as node}
        <SearchResult node={node} />
    {/each}
</div>
