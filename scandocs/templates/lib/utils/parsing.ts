import Package from "$lib/components/structures/Package.svelte";
import Module from "$lib/components/structures/Module.svelte";
import Class from "$lib/components/structures/Class.svelte";
import Subroutine from "$lib/components/structures/Subroutine.svelte";
import type {JsonNode, Node} from "$lib/utils/types";

export const parseProject = (project: JsonNode): Node => {
    const componentLookup = {
        "Package": Package,
        "Module": Module,
        "Class": Class,
        "Subroutine": Subroutine
    }
    return JSON.parse(JSON.stringify(project), (key, value) => {
        if (value in componentLookup) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return componentLookup[value]
        }
        return value
    })
}
