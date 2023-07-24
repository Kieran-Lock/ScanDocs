// @ts-ignore
import type {SvelteComponent} from "svelte";

type PackageMeta = {
    name: string,
    version: string | null
}
type ModuleMeta = {
    name: string
}
type ClassMeta = {
    name: string
}
type SubroutineMeta = {
    name: string
}
export type Node = {
    component: SvelteComponent,
    meta: PackageMeta | ModuleMeta | ClassMeta | SubroutineMeta,
    children: Node[][]
}
