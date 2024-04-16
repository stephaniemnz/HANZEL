import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const VotingSection = styled.div`
  margin-bottom: 10px;
`;

const VoteButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${(props) =>
    props.active ? "#ff4500" : "#000"};

  &:hover {
    color: ${(props) => (props.type === "up" ? "#00cc00" : "#ff6347")};
  }
`;

const VoteCount = styled.span`
  font-size: 1.2rem;
  margin: 0 10px;
`;

const Photo = ({ item }) => {
  const [voteCount, setVoteCount] = useState(0);
  const [voteDirection, setVoteDirection] = useState(null);

  const handleUpvote = () => {
    if (voteDirection === "upvote") {
      // Reset upvote
      setVoteCount(voteCount - 1);
      setVoteDirection(null);
    } else {
      // Update vote count and direction
      if (voteDirection === "downvote") {
        setVoteCount(voteCount + 2);
      } else {
        setVoteCount(voteCount + 1);
      }
      setVoteDirection("upvote");
    }
  };

  const handleDownvote = () => {
    if (voteDirection === "downvote") {
      // Reset downvote
      setVoteCount(voteCount + 1);
      setVoteDirection(null);
    } else {
      // Update vote count and direction
      if (voteDirection === "upvote") {
        setVoteCount(voteCount - 2);
      } else {
        setVoteCount(voteCount - 1);
      }
      setVoteDirection("downvote");
    }
  };

  return (
    <div className="gallery-item">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>${item.price}</p>

      {/* Voting section */}
      <VotingSection>
        <VoteButton
          onClick={handleUpvote}
          active={voteDirection === "upvote"}
          type="up"
        >
          <Icon name="arrow alternate circle up outline" />
        </VoteButton>
        <VoteCount>{voteCount}</VoteCount>
        <VoteButton
          onClick={handleDownvote}
          active={voteDirection === "downvote"}
          type="down"
        >
          <Icon name="arrow alternate circle down outline" />
        </VoteButton>
      </VotingSection>

      <button>Add to Cart</button>
    </div>
  );
};

export default Photo;
