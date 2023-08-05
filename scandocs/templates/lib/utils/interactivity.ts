import {writable} from "svelte/store";
import type {TreeOnlyNode} from "$lib/utils/types";
import {entriesOf, traverseProject} from "$lib/utils/parsing";
import {project} from "$lib/stores/project";

const createActiveNodeStore = () => {
    const store = writable(0)

    return {
        subscribe: store.subscribe,
        setActive: (node: TreeOnlyNode) => {
            for (const [i, structure] of entriesOf(traverseProject(project))) {
                if (structure === node) {
                    store.set(i as number)
                    return
                }
            }
        },
        getActive: (current: unknown): TreeOnlyNode => {
            for (const [i, structure] of entriesOf(traverseProject(project))) {
                if (i === current as number) {
                    return structure as TreeOnlyNode
                }
            }
            throw new Error(`No node exists with index ${current}`)
        }
    }
}

export const activeNode = createActiveNodeStore()
