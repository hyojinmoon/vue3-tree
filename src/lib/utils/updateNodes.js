function updateNodes(nodes) {
  return nodes.map(node => {
    if (node.nodes?.length) {
      node.nodes = updateNodes(node.nodes);
      const everyChecked = node.nodes.every(item => item.checked);
      const someChecked = node.nodes.some(item => item.checked);
      const anyDeterminate = node.nodes.some(item => item.indeterminate);

      if (everyChecked) {
        // 하위 노드를 모두 체크 해도 상위 노드 체크되는 기능 해제
        // node.checked = true;
        // node.indeterminate = false;
      } else if (someChecked) {
        node.checked = false;
        node.indeterminate = true;
      } else if (anyDeterminate) {
        node.checked = false;
        node.indeterminate = true;
      } else if (!everyChecked) {
        node.checked = false;
        node.indeterminate = false;
      }
    } else if (node.expanded) {
      node.expanded = false;
    }
    return node;
  });
}

export default updateNodes;
