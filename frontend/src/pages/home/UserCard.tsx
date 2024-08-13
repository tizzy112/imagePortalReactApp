import React from "react";
import styled from "styled-components";

{
  /*

import { GiLoveMystery } from "react-icons/gi";
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { RiShare2Fill } from "react-icons/ri";

const Wrapper = styled.div`
  border: 2px solid #ccc;
  border-radius: 30px;
  padding: 20px;
  height : 20%
  width: 20%


  .heading {
    align-item: center;
    font-size: 20px;
  }
`;
const ImageWrapper = styled.div`
  img {
    width: 550px;
    height: 300px;
    border-radius: 10px;
  }
`;
const IconWrapper = styled.div`
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 5px;
    font-size: 20px;
  }
`;

const UserCard = () => {
  const [love, loveCount] = useState(0);
  const incrementLoveCount = () => {
    loveCount(love + 1);
  };

  const [repost, repostCount] = useState(0);
  const incrementRepostCount = () => {
    repostCount(repost + 1);
  };

  const [share, shareCount] = useState(0);
  const incrementShareCount = () => {
    shareCount(share + 1);
  };
  const [comment, commentCount] = useState(0);
  const incrementCommentCount = () => {
    commentCount(comment + 1);
  };
  return (
    <Wrapper>
      <div className="heading">
        <h3>username</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <ImageWrapper>
        <img
          src="https://images.unsplash.com/photo-1721679241473-d00437cb5a44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
          alt=""
        />
      </ImageWrapper>
      <IconWrapper>
        <ul>
          <li>
            <RiShare2Fill onClick={incrementShareCount} /> {share}
          </li>
          <li>
            <BiRepost onClick={incrementRepostCount} />
            {repost}
          </li>
          <li>
            <FaRegComment onClick={incrementCommentCount} /> {comment}
          </li>
          <li>
            <GiLoveMystery onClick={incrementLoveCount} /> {love}
          </li>
        </ul>
      </IconWrapper>
    </Wrapper>
  );
};

export default UserCard;
*/
}

const Wrapper = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  padding: 24px;
  height: 400px;
  display: flex;
  flex-direction: column;

  .profilePicture {
    height: 60%;
    width: 100%;
    border-radius: 8px 8px 0 0;

    img {
      height: 100%;
      width: 100%;
      border-radius: 8px 8px 0 0;
      object-fit: cover;
    }
  }
`;

const UserCardTwo = () => {
  return (
    <Wrapper>
      <div className="profilePicture">
        <img
          src="https://plus.unsplash.com/premium_photo-1723120606780-a8f5fefca6f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </Wrapper>
  );
};
export default UserCardTwo;
