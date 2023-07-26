<script lang="ts">
    export let meta
</script>

<div class="w-full">
    <dt>
        <div class="flex flex-row pr-2 justify-between w-full">
            <div class="flex flex-row">
                {#if meta.name}
                    <h3>{meta.name}</h3>
                {/if}
                {#if meta.annotation}
                    <h3>: {meta.annotation}</h3>
                {/if}
            </div>
            {#if meta.isOptional}
                <p class="badge variant-ghost-secondary">Optional</p>
            {/if}
        </div>
    </dt>
    <dd class="ml-4">
        {#if meta.description}
            {meta.description}
        {/if}
    </dd>
</div>
