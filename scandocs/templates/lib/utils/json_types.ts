import type {
    ClassMeta,
    ComplexDescriptionMeta,
    DeprecationMeta,
    DeprecationTag, ErrorMeta, ModuleMeta,
    NameMeta, PackageMeta, ParameterMeta, SearchTermsMeta,
    SignatureMeta, SubroutineReturnMeta
} from "$lib/utils/types";

export interface JsonParametersMeta {
    parameters: JsonNode[]
}

export type SubroutineMeta = NameMeta & SignatureMeta & JsonParametersMeta & ComplexDescriptionMeta & SearchTermsMeta & {
    raises: JsonNode[]
    returns: JsonNode[]
    deprecation: DeprecationTag | null
    isGenerator: boolean
    isAsync: boolean | null  // TODO: Can be null?
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
