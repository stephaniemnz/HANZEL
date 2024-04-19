import React, {useState} from "react";
import styled from "styled-components";
import { Button, Header, Table, Segment } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';


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
   const [cartItems, setCartItems] = useState([]); 
  
  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {

      setCart(cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
  
      setCart([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

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
