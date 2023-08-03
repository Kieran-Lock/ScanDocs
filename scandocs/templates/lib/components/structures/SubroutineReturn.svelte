<script lang="ts">
    export let meta
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
            {#if meta.isOptional}
                <p class="badge variant-ghost-secondary">Optional</p>
            {/if}
        </div>
    </dt>
    <dd class="pl-8">
        {#if meta.description}
            {meta.description}
        {/if}
    </dd>
</div>
