/**
 * Copyright (c) 2024, Daily
 *
 * SPDX-License-Identifier: BSD 2-Clause License
 */

import { LiteGraph } from "litegraph.js";

import { VoicingStartNode } from "./startNode.js";
import { VoicingFlowNode } from "./flowNode.js";
import { VoicingEndNode } from "./endNode.js";
import { VoicingFunctionNode } from "./functionNode.js";
import { VoicingMergeNode } from "./mergeNode.js";

/**
 * Registers all node types with LiteGraph
 */
export function registerNodes() {
  LiteGraph.registerNodeType("nodes/Start", VoicingStartNode);
  LiteGraph.registerNodeType("nodes/Flow", VoicingFlowNode);
  LiteGraph.registerNodeType("nodes/End", VoicingEndNode);
  LiteGraph.registerNodeType("nodes/Function", VoicingFunctionNode);
  LiteGraph.registerNodeType("flow/Merge", VoicingMergeNode);
}

export {
  VoicingStartNode,
  VoicingFlowNode,
  VoicingEndNode,
  VoicingFunctionNode,
  VoicingMergeNode,
};
