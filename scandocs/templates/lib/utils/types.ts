import type {ComponentType} from "svelte";

export interface NameMeta {
    name: string
}
export interface SimpleDescriptionMeta {
    description: string | null
}
export interface AnnotationMeta {
    annotation: string | null
}
export interface SourceMeta {
    source: string
}
export interface SignatureMeta extends SourceMeta {
    signature: string
}
export interface ParametersMeta {

    parameters: Node[]
}
export interface ComplexDescriptionMeta {
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
    raises: Node[]
    returns: Node[]
    deprecation: DeprecationTag | null
    isGenerator: boolean
    isAsync: boolean | null  // TODO: Can be null?
    isAbstract: boolean
    isLambda: boolean
    isContextManager: boolean
}
export type SubroutineReturnMeta = SimpleDescriptionMeta & AnnotationMeta

export type AnyMeta = ClassMeta & DeprecationMeta & ErrorMeta & ModuleMeta & PackageMeta & ParameterMeta & SubroutineMeta & SubroutineReturnMeta
export type AllTreeOnlyMeta = ClassMeta | ModuleMeta | PackageMeta | SubroutineMeta

export type Node = {
    component: ComponentType,
    meta: AnyMeta,
    children: Record<string, Node[]>
}
export type TreeOnlyNode = {
    component: ComponentType,
    meta: AllTreeOnlyMeta,
    children: Record<string, Node[]>
}
