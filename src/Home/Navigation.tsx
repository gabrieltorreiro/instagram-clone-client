import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`

    width:100%;
    background-color: white;
    position: fixed;
    padding: 15px 15px;
    top: 0;
    border: 1px solid rgba(0,0,0,0.1);

`;

const Navigation = () => {
  return (
    <Wrapper>
      <img src="./assets/Instagram.svg" />
    </Wrapper>
  );
};

export default Navigation;
