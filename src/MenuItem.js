import React from "react";
import MenuList from "./MenuList";
import styled from "styled-components";
import { Plus, Minus } from "react-feather";

function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = React.useState(false);
  return (
    <Wrapper>
      <div>
        <p>
          {item.name}
          {item.children && item.children.length > 0 && (
            <Button onClick={() => setDisplayCurrentChildren(!displayCurrentChildren)}>
              {displayCurrentChildren ? <Minus /> : <Plus />}
            </Button>
          )}
        </p>
      </div>
      {item.children && item.children.length > 0 && displayCurrentChildren && <MenuList list={item.children} />}
    </Wrapper>
  );
}

const Wrapper = styled.li`
  margin-left: 20px;

  & p {
    display: flex;
    align-items: center;
  }
`;
const Button = styled.button`
  margin: 0;
  border: 0;
  padding: 0;
  background: transparent;
  margin-left: 6px;
  cursor: pointer;

  & svg {
    transform: translateY(-1.5px);
  }
`;

export default MenuItem;
