function updateChildNodeStatus(node, checkedStatus, checkType) {
  const checked =
    typeof checkedStatus !== "undefined" ? checkedStatus : node.checked;

  node.checked = checked;

  if(checkType!="each"){
    if (node && Array.isArray(node.nodes)) {
      node.nodes = node.nodes.map((item) => {
        return {
          ...item,
          checked,
          nodes: item.nodes
              ? item.nodes.map((n) => {
                return updateChildNodeStatus(n, checked);
              })
              : undefined,
        };
      });
    }
  }
  return node;
}

export default updateChildNodeStatus;
