import type {SvelteComponent} from "svelte";

interface Meta {
    name: string
}

interface SourceMeta extends Meta {
    source: string | null
}

export type PackageMeta = Meta
export type ModuleMeta = Meta
export type ClassMeta = SourceMeta
export type SubroutineMeta = SourceMeta

export type Node = {
    component: SvelteComponent,
    meta: PackageMeta | ModuleMeta | ClassMeta | SubroutineMeta,
    children: Node[][]
}

export type JsonNode = {
    component: string,
    meta: PackageMeta | ModuleMeta | ClassMeta | SubroutineMeta,
    children: JsonNode[][]
}
