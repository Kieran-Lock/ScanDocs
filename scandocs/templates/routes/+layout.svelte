<script lang='ts'>
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
    import {AppShell} from "@skeletonlabs/skeleton";
    import Header from "$lib/components/Header.svelte";
    import Search from "$lib/components/Search.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<AppShell>
    <svelte:fragment slot="header">
        <Header />
    </svelte:fragment>
    <svelte:fragment slot="sidebarLeft">
        <Search />
    </svelte:fragment>
    <slot />
    <svelte:fragment slot="pageFooter">
        <Footer />
    </svelte:fragment>
</AppShell>
