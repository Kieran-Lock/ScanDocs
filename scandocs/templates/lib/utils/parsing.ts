// @ts-nocheck
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

export function* traverseProject(node: Node) {
    const stack: Node[] = []
    const explored: Set<Node> = new Set()
    stack.push(node)
    explored.add(node)
    while (stack.length !== 0) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const node = stack.pop()!
        yield node

        for (const childType of node.children) {
            for (const children of Object.values(childType)) {
                for (const child of children.filter(child => !explored.has(child))) {
                    stack.push(child)
                    explored.add(child)
                }
            }
        }
    }
}
