<script lang='ts'>
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
    import {AppShell} from "@skeletonlabs/skeleton";
    import hljs from 'highlight.js';
    import 'highlight.js/styles/github-dark.css';
    import { storeHighlightJs } from '@skeletonlabs/skeleton';
    import Sidebar from "$lib/components/sidebar/Sidebar.svelte";
    storeHighlightJs.set(hljs);
</script>

<AppShell class="w-full">
    <svelte:fragment slot="sidebarLeft">
        <Sidebar />
    </svelte:fragment>
    <slot />
</AppShell>
