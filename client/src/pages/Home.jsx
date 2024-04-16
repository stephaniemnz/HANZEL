import React from "react";
import { useState } from "react";
import '.home.css';

const gallery = [
    { id: 1, title: "Gallery 1", image: "https://via.placeholder.com/150", price: '30.00'},
    { id: 2, title: "Gallery 2", image: "https://via.placeholder.com/150", price: '40.00'},
    { id: 3, title: "Gallery 3", image: "https://via.placeholder.com/150", price: '50.00'},
    { id: 4, title: "Gallery 4", image: "https://via.placeholder.com/150", price: '60.00'},
    { id: 5, title: "Gallery 5", image: "https://via.placeholder.com/150", price: '70.00'},
    { id: 6, title: "Gallery 6", image: "https://via.placeholder.com/150", price: '80.00'},
    { id: 7, title: "Gallery 7", image: "https://via.placeholder.com/150", price: '90.00'},
    { id: 8, title: "Gallery 8", image: "https://via.placeholder.com/150", price: '100.00'},
];

function Home() {
    return (
        <div>
            <h1>Welcome</h1>
            <div className="gallery">
                {gallery.map((item) => (
                    <div key={item.id} className="gallery-item">
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>${item.price}</p>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>     
    );
}

export default Home;