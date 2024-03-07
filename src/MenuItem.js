import React from "react";
import MenuList from "./MenuList";
import styled from "styled-components";

function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = React.useState(false);
  return (
    <Wrapper>
      <div>
        <p>
          {item.name}
          {item.children && item.children.length > 0 && (
            <Button onClick={() => setDisplayCurrentChildren(!displayCurrentChildren)}>
              {displayCurrentChildren ? "-" : "+"}
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
`;
const Button = styled.button`
  margin: 0;
  border: 0;
  background: transparent;
  margin-left: 6px;
  cursor: pointer;
`;

export default MenuItem;
