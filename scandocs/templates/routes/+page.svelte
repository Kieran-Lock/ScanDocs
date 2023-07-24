<script lang="ts">
    import Package from "$lib/structures/Package.svelte";
    import Module from "$lib/structures/Module.svelte";
    import Subroutine from "$lib/structures/Subroutine.svelte";
    import Class from "$lib/structures/Class.svelte";
    import Tree from "$lib/components/Tree.svelte";
    import {TreeView} from "@skeletonlabs/skeleton";

    const projectRaw = "%PROJECT_HERE%"
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
</script>

<TreeView>
    <Tree nodes={parseProject(projectRaw).children.flat()} />
</TreeView>
