/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useRef } from "react";
import styled from "styled-components";
import { MdCancel } from "react-icons/md";
import Button from "../../component/Button";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(Backdrop)`
  .container {
    background: #fff;
    border-radius: 8px;
    width: 500px;
    height: 500px;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      padding: 24px;

      p {
        font-size: 24px;
        font-weight: 600;
      }
    }
    .content {
      padding: 24px;
      display: grid;
      gap: 24px;

      input {
        width: 100%;
        padding: 12px;
        border-radius: 8px;
        border: 1px solid #ccc;
      }
      form {
        display: grid;
        gap: 24px;
      }
      .profilePicture {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        border: 3px solid #ff6f61;
        cursor: pointer;
        img {
          height: 100%;
          width: 100%;
          border-radius: 50%;
          object-fit: cover;
        }
      }
    }
  }
`;
interface createModalProps {
  setOpenCreateModal: (value: boolean) => void;
}

const CreateModal = ({ setOpenCreateModal }: createModalProps) => {
  const inputRef = useRef(null);

  const handleImageUpload = () => {
    //@ts-expect-error
    inputRef.current.click();
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="header">
          <p>create post</p>
          <MdCancel color="#ff6f61" onClick={() => setOpenCreateModal(false)} />
        </div>
        <div className="content">
          <div className="">
            <div className="profilePicture" onClick={handleImageUpload}>
              <img
                src="https://images.unsplash.com/photo-1723239367898-c9372f634b1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
                alt=""
              />
            </div>
            <input
              type="file"
              style={{ display: "none" }}
              ref={inputRef}
              accept=".jpeg, .jpg, .png, .gif, .mp4, .mp3"
            />
          </div>
          <form action="">
            <input type="text" placeholder="input your content" />
            <input type="text" placeholder="whats on your mind" />

            <Button text="Create Post" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default CreateModal;
