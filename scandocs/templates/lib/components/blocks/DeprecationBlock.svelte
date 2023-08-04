<script lang="ts">
    import type {DeprecationTag} from "$lib/utils/types";

    export let deprecation: DeprecationTag
</script>

<div class="flex flex-col card p-4 gap-4 variant-glass-warning">
    <header>
        <h2>Deprecated since {deprecation.version}</h2>
    </header>
    <p>{deprecation.description}</p>
</div>
