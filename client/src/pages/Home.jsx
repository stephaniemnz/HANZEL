import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import Photo from "../components/Photo";
import SaleItem from "../components/SaleItem";

const gallery = [
  {
    id: 1,
    title: "Cirque de Noir",
    description: "Artist balancing on one hand",
    image: "/images/hanzel2.jpg",
    price: "200.00 USD",
    upvotes: 0,
  },
  {
    id: 2,
    title: "Shadow Men",
    description: "Business Men walking away in shadows",
    image: "/images/hanzel5.jpg",
    price: "200.00 USD",
    upvotes: 5,
  },
  {
    id: 3,
    title: "Red Room",
    description: "A man in a red room",
    image: "images/R2006838.jpg",
    price: "250.00 USD",
    upvotes: 10,
  },
  {
    id: 4,
    title: "Crowded Room",
    description: "I think I want to be alone",
    image: "images/R2007377.jpg",
    price: "200.00 USD",
    upvotes: 15,
  },
  {
    id: 5,
    title: "River or Road?",
    description: "View of distant mountain with winding river road",
    image: "/images/hanzel4.jpg",
    price: "200.00 USD",
    upvotes: 20,
  },
  {
    id: 6,
    title: "Dancer pose",
    description: "Man in a pose on one foot",
    image: "/images/hanzel6 (1).jpg",
    price: "200.00 USD",
    upvotes: 25,
  },
  {
    id: 7,
    title: "Champagne Girl",
    description: "Woman in beautiful dress, posed.",
    image: "/images/r2006668-edit-edit.jpg",
    price: "200.00 USD",
    upvotes: 30,
  },
  {
    id: 8,
    title: "Smokin Bride",
    description: "This bride is a smoke show",
    image: "images/R2007223.jpg",
    price: "200.00 USD",
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

  const location = useLocation();
  const backgroundClass = location.pathname === '' ? 'home-background' : 'login-background';


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
