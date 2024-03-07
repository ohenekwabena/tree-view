import styled from "styled-components";
import MenuList from "./MenuList";

function TreeView({ menus = [] }) {
  return <TreeViewWrapper>{menus && <MenuList list={menus} />}</TreeViewWrapper>;
}

const TreeViewWrapper = styled.div`
  height: 300px;
  min-width: 300px;
  padding: 2rem;
  background-color: #e5e5f7;
  opacity: 0.8;
  background-image: radial-gradient(#444cf7 0.5px, transparent 0.5px), radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
`;

export default TreeView;
