/**
 * Copyright (c) 2024, Daily
 *
 * SPDX-License-Identifier: BSD 2-Clause License
 */

import { LiteGraph } from "litegraph.js";

import { BotStartNode } from "./startNode.js";
import { BotFlowNode } from "./flowNode.js";
import { BotEndNode } from "./endNode.js";
import { BotFunctionNode } from "./functionNode.js";
import { BotMergeNode } from "./mergeNode.js";

/**
 * Registers all node types with LiteGraph
 */
export function registerNodes() {
  LiteGraph.registerNodeType("nodes/Start", BotStartNode);
  LiteGraph.registerNodeType("nodes/Flow", BotFlowNode);
  LiteGraph.registerNodeType("nodes/End", BotEndNode);
  LiteGraph.registerNodeType("nodes/Function", BotFunctionNode);
  LiteGraph.registerNodeType("flow/Merge", BotMergeNode);
}

export {
  BotStartNode,
  BotFlowNode,
  BotEndNode,
  BotFunctionNode,
  BotMergeNode,
};
