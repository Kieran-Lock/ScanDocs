import {writable} from "svelte/store";
import type {Node} from "$lib/utils/types";
import {entriesOf, traverseProject} from "$lib/utils/parsing";
import {project} from "$lib/content/project";

const createActiveNodeStore = () => {
    const store = writable(0)

    return {
        subscribe: store.subscribe,
        setActive: (node: Node) => {
            for (const [i, structure] of entriesOf(traverseProject(project))) {
                if (structure === node) {
                    store.set(i as number)
                    return
                }
            }
        },
        getActive: (current: unknown): Node | null => {
            for (const [i, structure] of entriesOf(traverseProject(project))) {
                if (i === current as number) {
                    return structure as Node
                }
            }
            return null
        }
    }
}

export const activeNode = createActiveNodeStore()
