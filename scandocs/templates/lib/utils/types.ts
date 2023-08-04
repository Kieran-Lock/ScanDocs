// @ts-nocheck
import type {SvelteComponent} from "svelte";

interface NameMeta {
    name: string
}
interface SimpleDescriptionMeta {
    description: string
}
interface AnnotationMeta {
    annotation: string | null
}
interface SourceMeta {
    source: string
}
interface SignatureMeta extends SourceMeta {
    signature: string
}
interface ParametersMeta {
    parameters: Node[]
}
interface ComplexDescriptionMeta {
    shortDescription: string | null
    longDescription: string | null
    deprecation: Node | null
}

export type ClassMeta = NameMeta & SignatureMeta & ParametersMeta & ComplexDescriptionMeta
export type DeprecationMeta = SimpleDescriptionMeta & {
    version: string
}
export type ErrorMeta = NameMeta & SimpleDescriptionMeta
export type ModuleMeta = NameMeta & SourceMeta & ComplexDescriptionMeta
export type PackageMeta = NameMeta & SourceMeta & ComplexDescriptionMeta
export type ParameterMeta = NameMeta & SimpleDescriptionMeta & AnnotationMeta & {
    default: string | null
    isOptional: string
}
export type SubroutineMeta = NameMeta & SignatureMeta & ParametersMeta & ComplexDescriptionMeta & {
    raises: Node[]
    returns: Node[]
    isGenerator: boolean
    isAsync: boolean
}
export type SubroutineReturnMeta = SimpleDescriptionMeta & AnnotationMeta

export type AllMeta = ClassMeta & DeprecationMeta & ErrorMeta & ModuleMeta & PackageMeta & ParameterMeta & SubroutineMeta & SubroutineReturnMeta
export type Node = {
    component: SvelteComponent,
    meta: AllMeta,
    children: Record<string, Node[]>
}
export type JsonNode = {
    component: string,
    meta: AllMeta,
    children: Record<string, JsonNode[]>
}
