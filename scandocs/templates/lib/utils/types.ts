// @ts-nocheck
import type {SvelteComponent} from "svelte";

interface NameMeta {
    name: string
}
interface DescriptionMeta {
    description: string
}
interface AnnotationMeta {
    annotation: string | null
}
interface SourceMeta {
    source: string
    docstring: Node
}
interface SignatureMeta extends SourceMeta {
    signature: string
}
interface ParametersMeta {
    parameters: Node[]
}

export type ClassMeta = SignatureMeta & ParametersMeta
export type DeprecationMeta = DescriptionMeta & {
    version: string
}
export type DocstringMeta = ParametersMeta & {
    shortDescription: string
    longDescription: string
    deprecation: Node | null
    raises: Node[]
    returns: Node[]
}
export type ErrorMeta = NameMeta & DescriptionMeta
export type ModuleMeta = NameMeta & SourceMeta
export type PackageMeta = NameMeta & SourceMeta
export type ParameterMeta = NameMeta & DescriptionMeta & ParametersMeta & AnnotationMeta & {
    default: string | null
    isOptional: string
}
export type SubroutineMeta = NameMeta & SignatureMeta & ParametersMeta & {
    returnType: string
    exceptions: Node[]
}
export type SubroutineReturnMeta = DescriptionMeta & AnnotationMeta & {
    isYield: boolean
}

export type AllMeta = ClassMeta & DeprecationMeta & DocstringMeta & ErrorMeta & ModuleMeta & PackageMeta & ParameterMeta & SubroutineMeta & SubroutineReturnMeta
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
