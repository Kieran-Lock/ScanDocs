<script>
    import {filteredItems} from "$lib/stores/searching";
</script>

<div class="flex flex-col gap-8 w-full p-8">
    {#each $filteredItems as item}
        <div class="card variant-ghost-surface p-4">
            <header>
                <h3>{item}</h3>
            </header>
        </div>
    {/each}
</div>
