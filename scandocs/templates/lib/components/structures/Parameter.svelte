<script lang="ts">
    import type {ParameterMeta} from "$lib/utils/types";

    export let meta: ParameterMeta
</script>

<div class="w-full">
    <dt>
        <div class="flex flex-row pr-2 justify-between w-full">
            <div class="flex flex-row gap-2 text-md">
                {#if meta.name}
                    <p>{meta.name}</p>
                {/if}
                <p> : </p>
                {#if meta.annotation}
                    <p class="italic">{meta.annotation}</p>
                {:else}
                    <p class="italic">No Annotation Specified</p>
                {/if}
            </div>
            <div>
                {#if meta.isOptional}
                    <p class="badge variant-ghost-secondary">Optional</p>
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
