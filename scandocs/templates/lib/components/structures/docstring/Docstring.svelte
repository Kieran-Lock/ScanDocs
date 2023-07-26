<script lang="ts">
    import DeprecationBlock from "$lib/components/structures/docstring/DeprecationBlock.svelte";
    import DescriptionsBlock from "$lib/components/structures/docstring/DescriptionsBlock.svelte";
    import ParametersBlock from "$lib/components/structures/docstring/ParametersBlock.svelte";
    import ReturnsBlock from "$lib/components/structures/docstring/ReturnsBlock.svelte";
    import RaisesBlock from "$lib/components/structures/docstring/RaisesBlock.svelte";

    export let meta
</script>

<div class="flex flex-col gap-4">
    <DeprecationBlock deprecation={meta.deprecation} />
    <DescriptionsBlock short={meta.shortDescription} long={meta.longDescription} />
    <ParametersBlock parameters={meta.parameters} />
    <ReturnsBlock returns={meta.returns} />
    <RaisesBlock exceptions={meta.raises} />
</div>
