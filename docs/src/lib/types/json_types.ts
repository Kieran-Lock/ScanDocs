import type {
    ComplexDescriptionMeta,
    DeprecationMeta,
    DeprecationTag, ErrorMeta,
    NameMeta, PackageMeta, ParameterMeta, SearchTermsMeta,
    SignatureMeta, SourceMeta, SubroutineReturnMeta, VariableMeta
} from "$lib/types/types";

export interface JsonParametersMeta {
    parameters: JsonNode[]
}

export type ClassMeta = NameMeta & SignatureMeta & JsonParametersMeta & ComplexDescriptionMeta & SearchTermsMeta & {
    isAbstract: boolean
    deprecation: DeprecationTag | null
    classVariables: JsonNode[]
}
export type ModuleMeta = NameMeta & SourceMeta & ComplexDescriptionMeta & SearchTermsMeta & {
    globalVariables: JsonNode[]
}
export type SubroutineMeta = NameMeta & SignatureMeta & JsonParametersMeta & ComplexDescriptionMeta & SearchTermsMeta & {
    raises: JsonNode[]
    returns: JsonNode[]
    deprecation: DeprecationTag | null
    isGenerator: boolean
    isAsync: boolean
    isAbstract: boolean
    isLambda: boolean
    isContextManager: boolean
}

export type AllJsonMeta = ClassMeta | DeprecationMeta | ErrorMeta | ModuleMeta | PackageMeta | ParameterMeta | SubroutineMeta | SubroutineReturnMeta | VariableMeta

export type JsonNode = {
    component: string,
    meta: AllJsonMeta,
    children: Record<string, JsonNode[]>
}
