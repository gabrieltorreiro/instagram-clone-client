import React from "react";
import Post from "./Post";
import styled from "styled-components";
import Navigation from "./Navigation";

const Container = styled.div`
  width: 100%;
  `;

const Wrapper = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
`;

const Home = () => {
  return (
    <Container>
      <Navigation />
      <Wrapper>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Wrapper>
    </Container>
  );
};

export default Home;
