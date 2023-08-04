<script lang="ts">
    import type {ErrorMeta} from "$lib/utils/types";

    export let meta: ErrorMeta
</script>

<div class="w-full">
    <dt>
        <div class="flex flex-row pr-2 justify-between w-full">
            <div class="flex flex-row gap-2 text-md">
                <p>{meta.name}</p>
            </div>
        </div>
    </dt>
    <dd class="pl-8">
        {#if meta.description}
            {meta.description}
        {/if}
    </dd>
</div>
