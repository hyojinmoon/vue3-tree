import updateChildNodeStatus from "./updateChildNodeStatus";

function updateNodeById(nodes, id, newNode, checkType) {
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (node.id === id) {
      nodes[i] = updateChildNodeStatus({ ...node, ...newNode }, undefined, checkType);
    } else if (Array.isArray(node.nodes)) {
      nodes[i].nodes = updateNodeById(node.nodes, id, newNode, checkType);
    }
  }

  return nodes;
}

export default updateNodeById;
