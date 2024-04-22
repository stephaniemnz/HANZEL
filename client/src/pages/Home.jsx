import React from "react";
import { Link, useLocation } from "react-router-dom";
import Photo from "../components/Photo";
import { useState } from "react";
import SaleItem from "../components/SaleItem";

const gallery = [
  {
    id: 1,
    title: "Gallery 1",
    image: "https://via.placeholder.com/150",
    price: "30.00",
    upvotes: 0,
  },
  {
    id: 2,
    title: "Gallery 2",
    image: "https://via.placeholder.com/150",
    price: "40.00",
    upvotes: 5,
  },
  {
    id: 3,
    title: "Gallery 3",
    image: "https://via.placeholder.com/150",
    price: "50.00",
    upvotes: 10,
  },
  {
    id: 4,
    title: "Gallery 4",
    image: "https://via.placeholder.com/150",
    price: "60.00",
    upvotes: 15,
  },
  {
    id: 5,
    title: "Gallery 5",
    image: "https://via.placeholder.com/150",
    price: "70.00",
    upvotes: 20,
  },
  {
    id: 6,
    title: "Gallery 6",
    image: "https://via.placeholder.com/150",
    price: "80.00",
    upvotes: 25,
  },
  {
    id: 7,
    title: "Gallery 7",
    image: "https://via.placeholder.com/150",
    price: "90.00",
    upvotes: 30,
  },
  {
    id: 8,
    title: "Gallery 8",
    image: "https://via.placeholder.com/150",
    price: "100.00",
    upvotes: 35,
  },
  
];

const saleItem = {
  id: 9,
  title: "Sale Item",
  image: "https://via.placeholder.com/150",
  price: 100.0,
  salePrice: 50.0,
  upvotes: 50,
};

function Home() {
  const [saleStatus, setSaleStatus] = useState(false);
  // Move the cart into context to share it in global state
  // const [cart, setCart] = useState([]);

  const location = useLocation();
  const backgroundClass = location.pathname === '' ? 'home-background' : 'login-background';


  // const addToCart = (item) => {
  //   const existingItem = cart.find((cartItem) => cartItem.id === item.id);
  //   if (existingItem) {
  //     setCart(
  //       cart.map((cartItem) =>
  //         cartItem.id === item.id
  //           ? { ...cartItem, quantity: cartItem.quantity + 1 }
  //           : cartItem
  //       )
  //     );
  //     return;
  //   } else {
  //     setCart([...cart, { ...item, quantity: 1 }]);
  //   }
  // };

  return (
    <div>
      <h1>HANZEL ORIGINALS</h1>
      {saleStatus && <SaleItem item={saleItem} />}
      <h2>Ryan Hanzel Photography</h2>
      <div className="gallery">
        {gallery.map((item) => (
          <Photo item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
