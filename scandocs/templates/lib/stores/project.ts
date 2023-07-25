// @ts-nocheck
import {parseProject, traverseProject} from "$lib/utils/parsing";
import {writable} from "svelte/store";
import type {Subscriber, Unsubscriber} from "svelte/store";
import type {Node} from "$lib/utils/types";

export const project = parseProject("%PROJECT_HERE%")

function* entriesOf(iterable: Iterable<unknown>) {
    let i = 0
    for (const value of iterable) {
        yield [i++, value]
    }
}

const createStore = () => {
    const store = writable(0)

    return {
        subscribe: store.subscribe,
        setActive: (node: Node) => {
            for (const [i, structure] of entriesOf(traverseProject(project))) {
                if (structure === node) {
                    store.set(i as number)
                }
            }
        },
        getActive: (current: unknown) => {
            for (const [i, structure] of entriesOf(traverseProject(project))) {
                if (i === current as number) {
                    return structure
                }
            }
        }
    }
}

export const activeProject = createStore()
