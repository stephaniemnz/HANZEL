import React from "react";
import styled from "styled-components";
import { Button, Header, Table, Segment } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'


// Styled container for the cart
const CartContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
`;

// Styled total header
const StyledTotal = styled(Header)`
  margin-top: 20px;
`;

const Cart = () => {
  // Dummy cart items
  const cartItems = [
    {
      image: "https://via.placeholder.com/50",
      name: "Photo 1",
      price: 10,    
      quantity: 1,
    },
    {
      image: "https://via.placeholder.com/50",
      name: "Photo 2",
      price: 20,
      quantity: 1,  
    },
  ];

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Handle checkout (for now, just show an alert)
  const onCheckout = () => {
    alert("Checkout not implemented yet!");
  };

  return (
    <CartContainer>
      <Segment padded>
        <Header as="h2" textAlign="center">
          Cart
        </Header>

        {/* Cart items in a table */}
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Image</Table.HeaderCell>
              <Table.HeaderCell>Product</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {cartItems.map((item, index) => (
              <Table.Row key={index}>
                <Table.Cell>
                  <img
                    src={item.image}
                    alt={item.name}
                    width="50"
                    height="50"
                  />
                </Table.Cell>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>${item.price.toFixed(2)}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

        {/* Total price */}
        <StyledTotal as="h3" textAlign="left">
          Total: ${totalPrice.toFixed(2)}
        </StyledTotal>

        {/* Checkout button */}
        <Button
          primary
          fluid
          size="large"
          onClick={onCheckout}
          style={{ marginTop: "20px" }}
        >
          Checkout
        </Button>
      </Segment>
    </CartContainer>
  );
};

export default Cart;
