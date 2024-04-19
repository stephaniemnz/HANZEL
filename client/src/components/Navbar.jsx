import React, { useState, useRef } from "react";
import { Menu, Input, Icon, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    setSidebarVisible(false);
  };
  const nodeRef = useRef(null);
  // Toggle sidebar visibility
  const handleToggle = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Check if the screen size is small or medium
  const isSmallOrMediumScreen = useMediaQuery({ maxWidth: 992 });

  return (
    <>
      {isSmallOrMediumScreen ? (
        // Sidebar for small and medium screens
        <>
          <Menu secondary>
            <Menu.Menu position="right">
              {/* Toggle button for small and medium screens */}
              <Menu.Item onClick={handleToggle}>
                <Icon name="bars" />
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
            ref={nodeRef}
          >
            <Menu.Item
              name="home"
              active={activeItem ? "home" : undefined}
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
              name="purchase"
              active={activeItem === "purchase"}
              onClick={handleItemClick}
              as={Link}
              to="/purchase"
            >
              Purchase
            </Menu.Item>
            <Menu.Item
              name="cart"
              active={activeItem === "cart"}
              onClick={handleItemClick}
              as={Link}
              to="/cart"
            >
              <Icon name="cart" />
              Cart
            </Menu.Item>
            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={handleItemClick}
              as={Link}
              to="/logout"
            >
              Logout
            </Menu.Item>
          </Sidebar>
        </>
      ) : (
        // Top menu for large screens
        <Menu secondary>
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
            name="purchase"
            active={activeItem === "purchase"}
            onClick={handleItemClick}
            as={Link}
            to="/purchase"
          >
            Purchase
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item
              name="cart"
              active={activeItem === "cart"}
              onClick={handleItemClick}
              as={Link}
              to="/cart"
            >
              <Icon name="cart" />
            </Menu.Item>
            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={handleItemClick}
              as={Link}
              to="/logout"
            >
              Logout
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      )}
    </>
  );
};

export default Navbar;
