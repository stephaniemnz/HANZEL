const db = require("./connection");
const { User, Photo } = require("../models");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  await cleanDB("Photos", "photos");
  await cleanDB("User", "users");

  const photos = await Photo.insertMany([
    {
      title: "Girl Noir",
      description: "young girls face in shadow",
      image: "HANZEL(9).jpg",
      price: "200.00 USD",
    },
    {
      title: "Shadow Men",
      description: "Business Men walking away in shadows",
      image: "hanzel5.jpg",
      price: "200.00 USD",
    },
    {
      title: "Cirque de Noir",
      description: "Artist balancing on one hand",
      image: "hanzel2.jpg",
      price: "200.00 USD",
    },
    {
      title: "Curious Squirrel",
      description: "Squirrel pops its head up in flower field",
      image: "hanzel3.jpeg",
      price: "200.00 USD",
    },
    {
      title: "River or Road?",
      description: "View of distant mountain with winding river road",
      image: "hanzel4.jpg",
      price: "200.00 USD",
    },
    {
      title: "Dancer pose",
      description: "Man in a pose on one foot",
      image: "hanzel6 (1).jpg",
      price: "200.00 USD",
    },
    {
      title: "Champagne Girl",
      description: "Woman in beautiful dress, posed.",
      image: "r2006668-edit-edit.jpg",
      price: "200.00 USD",
    },
  ]);

  console.log("photos seeded");

  process.exit();
});
