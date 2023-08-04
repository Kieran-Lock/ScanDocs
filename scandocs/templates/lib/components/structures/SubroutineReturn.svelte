<script lang="ts">
    import type {SubroutineReturnMeta} from "$lib/utils/types";

    export let meta: SubroutineReturnMeta
</script>

<div class="w-full">
    <dt>
        <div class="flex flex-row pr-2 justify-between w-full">
            <div class="flex flex-row gap-2 text-md">
                {#if meta.annotation}
                    <p>{meta.annotation}</p>
                {:else}
                    <p>No Annotation Specified</p>
                {/if}
            </div>
        </div>
    </dt>
    <dd class="pl-8">
        {#if meta.description}
            {meta.description}
        {/if}
    </dd>
</div>
