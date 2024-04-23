import React, { useContext, PureComponent } from "react";
import styled from "styled-components";
import { Button, Header, Table, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Store } from "../Store";
import { useLocation } from "react-router-dom"; 

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
  const location = useLocation();
  const backgroundClass = location.pathname === '' ? 'login-background' : 'home-background';

  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const totalPrice = cartItems?.reduce((total, item) => total + parseFloat(item.price), 0);

  const onCheckout = () => {
    alert("Checkout not implemented yet!");
  };

  const removeItemHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  return (
    <>
    <div className={backgroundClass}>
    <div style={{position:'relative', zIndex: 1}}>
    
    <CartContainer>
      <Segment padded>
        <Header as="h2" textAlign="center">
          Cart
        </Header>

        {/* Cart items in a table */}
        {cartItems.length !== 0 ? (
          <>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Image</Table.HeaderCell>
                  <Table.HeaderCell>Product</Table.HeaderCell>
                  <Table.HeaderCell>Price</Table.HeaderCell>
                  <Table.HeaderCell>Actions</Table.HeaderCell>  
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {cartItems.map((item, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>
                      <img
                        src={item.image}
                        alt={item.title}
                        width="50"
                        height="50"
                      />
                    </Table.Cell>
                    <Table.Cell>{item.title}</Table.Cell>
                    <Table.Cell>${item.price}</Table.Cell>
                    <Table.Cell>
                      <Button
                        color="red"
                        onClick={() => removeItemHandler(item)}
                      >
                        Remove
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>

            {/* Total price */}
            <StyledTotal as="h3" textAlign="left">
              Total: ${totalPrice}
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
          </>
        ) : (
          <Header as="h3" textAlign="center">
            Your cart is empty
          </Header>
        )}
      </Segment>
    </CartContainer>
    </div>
    </div>  
    </>
  );
};

export default Cart;
