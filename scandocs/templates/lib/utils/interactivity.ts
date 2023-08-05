import type {Node} from "$lib/utils/types";
import {activeNode} from "$lib/stores/node";

export const selectNode = (node: Node) => () => activeNode.setActive(node)
