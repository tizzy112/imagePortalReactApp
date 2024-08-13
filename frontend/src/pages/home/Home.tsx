import React, { useState } from "react";
import styled from "styled-components";
import AppHeader from "./AppHeader";
import Content from "./Content";
import ActionCenter from "./ActionCenter";
import CreateModal from "./CreateModal";
const Wrapper = styled.div`
  background: #fff;
  width: 40%;
  height: 100vh;
  margin: 0 auto;

  @media and screen(max-width: 768) {
    width: 100%;
  }
`;
const Home = () => {
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);

  return (
    <Wrapper>
      <AppHeader />
      <ActionCenter setOpenCreateModal={setOpenCreateModal} />
      <Content />

      {openCreateModal && (
        <CreateModal setOpenCreateModal={setOpenCreateModal} />
      )}
    </Wrapper>
  );
};

export default Home;
