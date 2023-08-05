import {writable, derived, type Writable, readable} from 'svelte/store';
import {iterator, traverseProject} from "$lib/utils/parsing";
import {project} from "$lib/stores/project";
import type {Node, TreeOnlyNode} from "$lib/utils/types";

const nodeIterator = iterator<Node>()
const filteredNodeIterator = iterator<TreeOnlyNode>()

export const searchTerm = writable("")
export const searchItems = readable(
    [...filteredNodeIterator.map(
        item => `${item.meta.name}`,
        nodeIterator.filter(item => "name" in item.meta, traverseProject(project)) as Iterable<TreeOnlyNode>
    )]
)
export const filteredItems = derived(
    [searchTerm, searchItems as Writable<string[]>],
    ([$term, $searchItems]) => $searchItems.filter(item => item.toLowerCase().includes($term.toLowerCase()))
)
