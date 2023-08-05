import type {Node} from "$lib/utils/types";
import {activeNode} from "$lib/stores/node";

export const selectNodeBuilder = (node: Node) => () => selectNode(node)

export const selectNode = (node: Node) => activeNode.setActive(node)
