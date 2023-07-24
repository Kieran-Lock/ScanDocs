<script lang='ts'>
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
    import {AppShell} from "@skeletonlabs/skeleton";
    import hljs from 'highlight.js';
    import 'highlight.js/styles/github-dark.css';
    import { storeHighlightJs } from '@skeletonlabs/skeleton';
    import Sidebar from "$lib/components/layout/Sidebar.svelte";
    import Package from "$lib/components/structures/Package.svelte";
    import Module from "$lib/components/structures/Module.svelte";
    import Class from "$lib/components/structures/Class.svelte";
    import Subroutine from "$lib/components/structures/Subroutine.svelte";
    storeHighlightJs.set(hljs);

    const parseProject = (project) => {
        const componentLookup = {
            "Package": Package,
            "Module": Module,
            "Class": Class,
            "Subroutine": Subroutine
        }
        return JSON.parse(JSON.stringify(project), (key, value) => {
            if (value in componentLookup) {
                return componentLookup[value]
            }
            return value
        })
    }

    const project = parseProject("%PROJECT_HERE%")
</script>

<AppShell class="w-full">
    <svelte:fragment slot="sidebarLeft">
        <Sidebar project={project} />
    </svelte:fragment>
    <slot />
</AppShell>
