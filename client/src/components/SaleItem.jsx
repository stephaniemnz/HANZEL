import React from "react";
import styled from "styled-components";
import { Header, Image, Segment } from "semantic-ui-react";

// Define a styled container for the SaleItem component
const SaleItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
`;

// Define a styled segment for displaying sale details
const SaleDetailsSegment = styled(Segment)`
  text-align: center;
  width: 50%;
  padding: 20px;
  border-radius: 10px;
`;

const SaleItem = ({ item }) => {
  const { id, title, image, price, salePrice, upvotes } = item;
  return (
    <SaleItemContainer>
      <Header as="h1" dividing>
        Sale
      </Header>
      <SaleDetailsSegment raised>
        <Image src={image} alt={title} centered size="small" rounded />
        <Header as="h2" content={title} style={{ marginTop: "20px" }} />
        <p style={{ fontSize: "14px", marginBottom: "10px" }}>
          Upvotes: {upvotes}
        </p>
        <Header
          as="h3"
          style={{ color: "green", textDecoration: "line-through" }}
        >
          Price: ${price.toFixed(2)}
        </Header>
        <Header as="h2" color="red">
          Sale Price: ${salePrice.toFixed(2)}
        </Header>
      </SaleDetailsSegment>
    </SaleItemContainer>
  );
};

export default SaleItem;
