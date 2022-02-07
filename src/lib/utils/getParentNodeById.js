function getParentNodeById(nodes, id) {
  if (!Array.isArray(nodes)) return;

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (node.nodes) {
      const isFound = node.nodes.find(item => item.id === id);
      if (isFound) {
        return node;
      }else{
        const result = getParentNodeById(node.nodes, id);
        if(result!=null) return result;
      }
    }
  }

  return null;
}

export default getParentNodeById;