import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Store } from "../Store";

const VotingSection = styled.div`
  margin-bottom: 10px;
`;

const LikeButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${(props) => (props.active ? "#ff4500" : "#000")};

  &:hover {
    color: #ff6347;
  }
`;

const LikeCount = styled.span`
  font-size: 1.2rem;
  margin: 0 10px;
`;

const Photo = ({ item }) => {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const [likeCount, setLikeCount] = useState(item.upvotes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      // Unlike the item
      setLikeCount(likeCount - 1);
      setLiked(false);
    } else {
      // Like the item
      setLikeCount(likeCount + 1);
      setLiked(true);
    }
  };

  const addtoCart = () => {
    dispatch({
      type: "CART_ADD_ITEM",
      payload: item,
    });
  };

  return (
    <div className="gallery-item">
      <Link to={`/Details/${item.id}`} style={{ color: 'white' }}>
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <p>${item.price}</p>
      </Link>

      {/* Like section */}
      <VotingSection>
        <LikeButton onClick={handleLike} active={liked} >
          <Icon style={{ color: 'white' }}
            name={liked ? "heart" : "heart outline"}
            color={liked ? "red" : undefined}
          />
        </LikeButton>
        <LikeCount>{likeCount}</LikeCount>
      </VotingSection>

      <button onClick={addtoCart}>Add to Cart</button>
    </div>
  );
};

export default Photo;
