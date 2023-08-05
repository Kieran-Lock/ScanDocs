<script lang="ts">
    export let text: string
    export let isVisible: boolean
</script>

{#if isVisible}
    <p class="badge variant-ghost-secondary rounded-2xl">{text}</p>
{/if}
