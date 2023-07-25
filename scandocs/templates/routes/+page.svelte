<script>
    import SourceBlock from "$lib/components/SourceBlock.svelte";
    import ParametersBlock from "$lib/components/ParametersBlock.svelte";
    import ReturnsBlock from "$lib/components/ReturnsBlock.svelte";
    import RaisesBlock from "../lib/components/RaisesBlock.svelte";
</script>

<div class="flex flex-col gap-6 ml-8 my-8">
    <SourceBlock />
    <ParametersBlock />
    <ReturnsBlock />
    <RaisesBlock />
</div>
