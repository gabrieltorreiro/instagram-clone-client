import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px 5px;
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const Icon = styled.img`
  &:hover {
    opacity: 50%;
  }
`;

const Icons = () => {
  return (
    <Wrapper>
      <Icon src={"./assets/Like.svg"} />
      <Icon src={"./assets/Comment.svg"} />
      <Icon src={"./assets/Share.svg"} />
    </Wrapper>
  );
};

export default Icons;
