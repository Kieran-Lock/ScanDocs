<script lang="ts">
    import {CodeBlock} from "@skeletonlabs/skeleton";
    import type {ExamplesTag} from "$lib/utils/types";

    export let examples: ExamplesTag
</script>

{#if examples.examples.length}
    <div class="flex flex-col gap-2 card p-4 variant-glass-surface w-full">
        <header>
            <h2 class="text-2xl font-bold">Examples</h2>
        </header>
        <section>
            {#each examples.examples as example}
                <div class="list-d flex-auto p-2">
                    <p class="font-semibold">{example.header}</p>
                    <CodeBlock class="w-full my-2" language="Python" code={example.code}></CodeBlock>
                    <p>{example.footer}</p>
                    <div class="pb-2 pt-4">
                        <hr class="!border-t-2" />
                    </div>
                </div>
            {/each}
        </section>
    </div>
{/if}
