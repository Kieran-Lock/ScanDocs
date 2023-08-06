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
    source: string | null
}
export interface SignatureMeta extends SourceMeta {
    signature: string
    deprecation: DeprecationTag | null
    examples: ExamplesTag | null
    links: LinksTag | null
    notes: NotesTag | null
}
export interface ParametersMeta {

    parameters: Node[]
}
export interface ComplexDescriptionMeta {
    shortDescription: string | null
    longDescription: string | null
}
export interface SearchTermsMeta {
    searchTerms: string
}

export interface DeprecationTag {
    version: string
    description: string | null
}
export interface ExamplesTag {
    examples: {
        title: string
        content: string
    }[]
}
export interface LinksTag {
    links: {
        title: string
        href: string
        description: string | null
    }[]
}
export interface NotesTag {
    notes: string[]
}

export type ClassMeta = NameMeta & SignatureMeta & ParametersMeta & ComplexDescriptionMeta & SearchTermsMeta & {
    isAbstract: boolean
    classVariables: Node[]
}
export type DeprecationMeta = SimpleDescriptionMeta & {
    version: string
}
export type ErrorMeta = NameMeta & SimpleDescriptionMeta
export type ModuleMeta = NameMeta & SourceMeta & ComplexDescriptionMeta & SearchTermsMeta & {
    globalVariables: Node[]
}
export type PackageMeta = NameMeta & SourceMeta & ComplexDescriptionMeta & SearchTermsMeta
export type ParameterMeta = NameMeta & SimpleDescriptionMeta & AnnotationMeta & {
    default: string | null
    isOptional: boolean
}
export type SubroutineMeta = NameMeta & SignatureMeta & ParametersMeta & ComplexDescriptionMeta & SearchTermsMeta & {
    raises: Node[]
    returns: Node[]
    deprecation: DeprecationTag | null
    isGenerator: boolean
    isAsync: boolean
    isAbstract: boolean
    isLambda: boolean
    isContextManager: boolean
}
export type SubroutineReturnMeta = SimpleDescriptionMeta & AnnotationMeta
export type VariableMeta = NameMeta & AnnotationMeta & {
    value: string
}

export type AnyMeta = ClassMeta & DeprecationMeta & ErrorMeta & ModuleMeta & PackageMeta & ParameterMeta & SubroutineMeta & SubroutineReturnMeta & VariableMeta
export type AnyTreeOnlyMeta = ClassMeta & ModuleMeta & PackageMeta & SubroutineMeta

export type Node = {
    component: ComponentType,
    meta: AnyMeta,
    children: Record<string, Node[]>
}
export type TreeOnlyNode = {
    component: ComponentType,
    meta: AnyTreeOnlyMeta,
    children: Record<string, Node[]>
}
