import React from "react";
import Button from "../../component/Button";

import styled from "styled-components";

const Wrapper = styled.div`
  padding: 24px;
  display: flex;
  gap: 24;
`;
interface ActionCenterProps {
  setOpenCreateModal: (value: boolean) => void;
}
const ActionCenter = ({ setOpenCreateModal }: ActionCenterProps) => {
  return (
    <Wrapper>
      <Button text="create" onClick={() => setOpenCreateModal(true)} />
      <Button text="refresh" />
      {/* <CreateModal /> */}
    </Wrapper>
  );
};

export default ActionCenter;
