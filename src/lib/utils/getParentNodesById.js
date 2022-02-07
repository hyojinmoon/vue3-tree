import {getParentNodeById} from "./index";

function getParentNodesById(allNodes, parentNode) {
  if (!allNodes || !parentNode) return;

  const allParentNodes=[];
  allParentNodes.push(parentNode);

  let thisParent = getParentNodeById(allNodes, parentNode.id);
  while (thisParent) {
    allParentNodes.push(thisParent);
    thisParent = getParentNodeById(allNodes, thisParent.id);
  }

  return allParentNodes;
}

export default getParentNodesById;