const db = require("./connection");
const { User, Photos } = require("../models");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  await cleanDB("Photos", "photos");
  await cleanDB("Users", "users");

  const photos = await Photos.insertMany([
    {
      title: "Shadow Men",
      description: "Business Men walking away in shadows",
      image: "/images/hanzel5.jpg",
      price: "200.00 USD",
    },
    {
      title: "Cirque de Noir",
      description: "Artist balancing on one hand",
      image: "/images/hanzel2.jpg",
      price: "200.00 USD",
    },
    {
      title: "River or Road?",
      description: "View of distant mountain with winding river road",
      image: "/images/hanzel4.jpg",
      price: "200.00 USD",
    },
    {
      title: "Dancer pose",
      description: "Man in a pose on one foot",
      image: "/images/hanzel6 (1).jpg",
      price: "200.00 USD",
    },
    {
      title: "Champagne Girl",
      description: "Woman in beautiful dress, posed.",
      image: "r2006668-edit-edit.jpg",
      price: "200.00 USD",
    },
    {
      title: "Red Room",
      description: "A man in a red room",
      image: "images/R2006838.jpg",
      price: "250.00 USD",
    },
    {
      title: "Smokin Bride",
      description: "This bride is a smoke show",
      image: "images/R2007223.jpg",
      price: "200.00 USD",
    },
    {
      title: "Crowded Room",
      description: "I think I want to be alone",
      image: "images/R2007377.jpg",
      price: "200.00 USD",
    },
    {
      title: "Champagne Girl",
      description: "Woman in beautiful dress, posed.",
      image: "/images/r2006668-edit-edit.jpg",
      price: "200.00 USD",
    },
  ]);

  console.log("photos seeded");

  process.exit();
});
