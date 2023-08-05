import { writable, derived } from 'svelte/store';

export const searchTerm = writable("")
export const searchItems = derived()
export const filtered = derived(
    [searchTerm, searchItems],
    ([$term, $searchItems]) => $searchItems.filter(x => x.includes($term))
)
