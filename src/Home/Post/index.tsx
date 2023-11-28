import React from "react";
import styled from "styled-components";
import UserArea from "./UserArea";
import Icons from "./Icons";

const PostWrapper = styled.div`
  border-bottom: 1px solid rgba(0,0,0,0.1);
  max-width: 450px;
  width: 100%;
  padding-bottom: 20px;
`;

const Media = styled.img`
  width: 100%;
`;

const Post = () => {
  return (
    <PostWrapper>
      <UserArea />
      <Media src={"https://media.macphun.com/img/uploads/macphun/blog/2063/_1.jpeg"}/>
      <Icons />
    </PostWrapper>
  );
};

export default Post;
