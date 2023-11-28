import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 5px;
    column-gap: 10px;
`;

const UserImage = styled.img`
    max-width: 40px;
    border-radius: 50%;
`;

const UserName = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: bold;
    width: 100%;
`;

const UserArea = () => {
  return (
    <Wrapper>
      <UserImage src={"https://th.bing.com/th/id/OIG.V1r6udT7B3SsnDzQ_bjz?pid=ImgGn"}/>
      <UserName>John Doe</UserName>
    </Wrapper>
  );
};

export default UserArea;
