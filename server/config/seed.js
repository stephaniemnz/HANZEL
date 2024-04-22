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
      image: "/images/HANZEL(9).jpg",
      price: "200.00 USD",
    },
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
      title: "Curious Squirrel",
      description: "Squirrel pops its head up in flower field",
      image: "/images/hanzel3.jpeg",
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
      title: 'Champagne Girl',
      description: 'Woman in beautiful dress, posed.',
      image: 'r2006668-edit-edit.jpg',
      price: '200.00 USD'
    },
    {
      title: 'Red Room',
      image: 'images/R2006838.jpg',
      price: '250.00 USD'
    },
    {
      title: 'Smokin Bride',
      image: 'images/R2007223.jpg',
      price: '200.00 USD'
    },
    {
      title: 'Crowded Room',
      image: 'images/R2007377.jpg',
      price: '200.00 USD'
    },
    {
      title: 'Champagne Girl',
      description: "Woman in beautiful dress, posed.",
      image: "/images/r2006668-edit-edit.jpg",
      price: "200.00 USD",
    }
  ]);

  console.log("photos seeded");

  await User.create({
    firstName: 'Testing',
    lastName: 'Testing',
    email: 'testing@testing.com',
    password: 'password123'
  });

  console.log('users seeded');

  process.exit();
});
