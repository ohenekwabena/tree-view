import styled from "styled-components";
import MenuList from "./MenuList";

function TreeView({ menus = [] }) {
  return <TreeViewWrapper>{menus && <MenuList list={menus} />}</TreeViewWrapper>;
}

const TreeViewWrapper = styled.div`
  height: 300px;
  width: 200px;
`;

export default TreeView;
