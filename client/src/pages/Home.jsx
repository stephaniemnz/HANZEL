import React from "react";
import { Link } from "react-router-dom";
import Photo from "../components/Photo";
import { useState } from "react";



const gallery = [
  { id: 1, title: "Gallery 1", image: "https://via.placeholder.com/150", price: '30.00' },
  { id: 2, title: "Gallery 2", image: "https://via.placeholder.com/150", price: '40.00' },
  { id: 3, title: "Gallery 3", image: "https://via.placeholder.com/150", price: '50.00' },
  { id: 4, title: "Gallery 4", image: "https://via.placeholder.com/150", price: '60.00' },
  { id: 5, title: "Gallery 5", image: "https://via.placeholder.com/150", price: '70.00' },
  { id: 6, title: "Gallery 6", image: "https://via.placeholder.com/150", price: '80.00' },
  { id: 7, title: "Gallery 7", image: "https://via.placeholder.com/150", price: '90.00' },
  { id: 8, title: "Gallery 8", image: "https://via.placeholder.com/150", price: '100.00' },
];

function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
      return;
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div>
      <h1>HANZEL ORIGINALS</h1>
      <h2>Ryan Hanzel Photography</h2>
      <div className="gallery">
        {gallery.map((item) => (
          <div key={item.id} className="gallery-item">
            <Link to={`/details/${item.id}`}>
              <Photo item={item} />
            </Link>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <button onClick={(event) =>{
              event.preventDefault();
              addToCart(item);
            }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
