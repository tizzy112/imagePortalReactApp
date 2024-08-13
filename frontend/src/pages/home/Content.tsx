import React from "react";
import UserCard from "./UserCard";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 24px;
`;
const Content = () => {
  return (
    <Wrapper>
      <UserCard />
    </Wrapper>
  );
};

export default Content;
