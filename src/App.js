import styled from "styled-components";
import "../reset.css";
import TreeView from "./TreeView";
import data from "./data";

function App() {
  return (
    <Wrapper>
      <TreeView menus={data} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  place-content: center;
  height: 100%;
`;
export default App;
