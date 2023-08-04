<script lang="ts">
    export let deprecation
</script>

<div class="flex flex-col card p-4 gap-4 variant-glass-warning">
    <header>
        <h2>Deprecated since {deprecation.version}</h2>
    </header>
    <p>{deprecation.description}</p>
</div>
