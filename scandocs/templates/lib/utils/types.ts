import type {ComponentType} from "svelte";

interface NameMeta {
    name: string
}
interface SimpleDescriptionMeta {
    description: string | null
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

    parameters: Node[] | JsonNode[]
}
interface ComplexDescriptionMeta {
    shortDescription: string | null
    longDescription: string | null
}

export interface DeprecationTag {
    version: string
    description: string | null
}

export type ClassMeta = NameMeta & SignatureMeta & ParametersMeta & ComplexDescriptionMeta & {
    isAbstract: boolean
    deprecation: DeprecationTag | null
}
export type DeprecationMeta = SimpleDescriptionMeta & {
    version: string
}
export type ErrorMeta = NameMeta & SimpleDescriptionMeta
export type ModuleMeta = NameMeta & SourceMeta & ComplexDescriptionMeta
export type PackageMeta = NameMeta & SourceMeta & ComplexDescriptionMeta
export type ParameterMeta = NameMeta & SimpleDescriptionMeta & AnnotationMeta & {
    default: string | null
    isOptional: boolean
}
export type SubroutineMeta = NameMeta & SignatureMeta & ParametersMeta & ComplexDescriptionMeta & {
    raises: Node[] | JsonNode[]
    returns: Node[] | JsonNode[]
    deprecation: DeprecationTag | null
    isGenerator: boolean
    isAsync: boolean | null  // TODO: Can be null?
    isAbstract: boolean
    isLambda: boolean
    isContextManager: boolean
}
export type SubroutineReturnMeta = SimpleDescriptionMeta & AnnotationMeta

export type AllMeta = ClassMeta | DeprecationMeta | ErrorMeta | ModuleMeta | PackageMeta | ParameterMeta | SubroutineMeta | SubroutineReturnMeta
export type TreeOnlyMeta = ClassMeta | ModuleMeta | PackageMeta | SubroutineMeta
export type Node = {
    component: ComponentType,
    meta: AllMeta,
    children: Record<string, Node[]>
}
export type JsonNode = {
    component: string,
    meta: AllMeta,
    children: Record<string, JsonNode[]>
}
export type TreeOnlyNode = {
    component: ComponentType,
    meta: TreeOnlyMeta,
    children: Record<string, Node[]>
}
