import React, { useState } from "react";
import styled from "styled-components";
import { Menu, Input, Icon, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import SalesBanner from "./SalesBanner";

const StickyNavbar = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem;
  background-color: transparent !important;
`;


const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    setSidebarVisible(false);
  };

  const handleToggle = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const isSmallOrMediumScreen = useMediaQuery({ maxWidth: 992 });

  const handleLogout = () => {  
    localStorage.removeItem('id_token');
    history.push('/login');
  }

  return (
    <>
      <SalesBanner />
      <StickyNavbar>
        {isSmallOrMediumScreen ? (
          <>
            <Menu secondary>
              <Menu.Menu position="right">
                <Menu.Item onClick={handleToggle}>
                  <Icon name="bars" style={{ color: 'white' }} />
                </Menu.Item>
              </Menu.Menu>
            </Menu>

            <Sidebar
              as={Menu}
              animation="overlay"
              direction="right"
              visible={sidebarVisible}
              onHide={() => setSidebarVisible(false)}
              inverted
              vertical
            >
              <Menu.Item
                name="home"
                active={activeItem === "home"}
                onClick={handleItemClick}
                as={Link}
                to="/"
              >
                Home
              </Menu.Item>
              <Menu.Item
                name="login"
                active={activeItem === "login"}
                onClick={handleItemClick}
                as={Link}
                to="/login"
              >
                Login
              </Menu.Item>
              <Menu.Item
                name="cart"
                active={activeItem === "cart"}
                onClick={handleItemClick}
                as={Link}
                to="/cart"
              >
                 <Icon name="cart" style={{ color: 'white' }} />
                Cart
              </Menu.Item>
              <Menu.Item
                name="logout"
                onClick={handleLogout}
              >
                Logout
              </Menu.Item>
            </Sidebar>
          </>
        ) : (
          <Menu secondary>
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={handleItemClick}
              as={Link}
              to="/"
              style={{ color: 'white' }}
            >
              Home
            </Menu.Item>
            <Menu.Item
              name="login"
              active={activeItem === "login"}
              onClick={handleItemClick}
              as={Link}
              to="/login"
              style={{ color: 'white' }}
            >
              Login
            </Menu.Item>

            <Menu.Menu position="right">
            
              <Menu.Item
                name="cart"
                active={activeItem === "cart"}
                onClick={handleItemClick}
                as={Link}
                to="/cart"
                style={{ color: 'white' }}
              >
                 <Icon name="cart" style={{ color: 'white' }} />
              </Menu.Item>
              <Menu.Item
                name="logout"
                onClick={handleLogout}  
                style={{ color: 'white' }}
              >
                Logout
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        )}
      </StickyNavbar>
    </>
  );
};

export default Navbar;
