// @ts-nocheck
import {parseProject} from "$lib/utils/parsing";
import {writable} from "svelte/store";
import type {Subscriber, Unsubscriber} from "svelte/store";
import type {Node} from "$lib/utils/types";

export const project = parseProject("%PROJECT_HERE%")

function* traverse(node: Node) {
    const stack = [];
    const explored = new Set();
    stack.push(node);
    explored.add(node);
    while (stack.length !== 0) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const node = stack.pop()!;
        yield node
        node.children.flat()
            .filter(n => !explored.has(n))
            .forEach(n => {
                explored.add(n);
                stack.push(n);
            });
    }
}

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
            for (const [i, structure] of entriesOf(traverse(project))) {
                if (structure === node) {
                    store.set(i as number)
                }
            }
        },
        getActive: (current: unknown) => {
            for (const [i, structure] of entriesOf(traverse(project))) {
                if (i === current as number) {
                    return structure
                }
            }
        }
    }
}

export const activeProject = createStore()
