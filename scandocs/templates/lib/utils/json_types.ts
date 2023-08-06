import type {
    ComplexDescriptionMeta,
    DeprecationMeta,
    DeprecationTag, ErrorMeta,
    NameMeta, PackageMeta, ParameterMeta, SearchTermsMeta,
    SignatureMeta, SourceMeta, SubroutineReturnMeta
} from "$lib/utils/types";

export interface JsonParametersMeta {
    parameters: JsonNode[]
}
export interface JsonVariablesMeta {
    variables: JsonNode[]
    variablesBlockName: string
}

export type ClassMeta = NameMeta & SignatureMeta & JsonParametersMeta & ComplexDescriptionMeta & SearchTermsMeta & JsonVariablesMeta & {
    isAbstract: boolean
    deprecation: DeprecationTag | null
}
export type ModuleMeta = NameMeta & SourceMeta & ComplexDescriptionMeta & SearchTermsMeta & JsonVariablesMeta
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

export type AllJsonMeta = ClassMeta | DeprecationMeta | ErrorMeta | ModuleMeta | PackageMeta | ParameterMeta | SubroutineMeta | SubroutineReturnMeta

export type JsonNode = {
    component: string,
    meta: AllJsonMeta,
    children: Record<string, JsonNode[]>
}
