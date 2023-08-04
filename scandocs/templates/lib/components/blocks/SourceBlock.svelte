<script lang="ts">
    import {CodeBlock, RadioGroup, RadioItem} from "@skeletonlabs/skeleton";
    export let source: string
    export let signature: string

    let isSignature = false
</script>

<div class="flex flex-col gap-2 items-end card p-4 variant-glass-surface">
    {#if signature}
        <RadioGroup rounded="rounded-container-token">
            <RadioItem bind:group={isSignature} name="toggle" value={false}>Source</RadioItem>
            <RadioItem bind:group={isSignature} name="toggle" value={true}>Signature</RadioItem>
        </RadioGroup>
    {/if}
    <CodeBlock class="w-full" language="Python" code={isSignature ? signature : source}></CodeBlock>
</div>
