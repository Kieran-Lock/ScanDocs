<script lang="ts">
    import {CodeBlock} from "@skeletonlabs/skeleton";
    export let meta
</script>

<div>
    <h1 class="font-bold text-lg">Subroutine: {meta.name}</h1>
    {#if meta.source !== null}
        <CodeBlock language="Python" code={meta.source}></CodeBlock>
    {/if}
</div>
