// routes/api/photos.js

const express = require('express');
const router = express.Router();
const Photo = require('../../models/Photo');

// Define route to handle upvoting a photo
router.post('/upvote/:id', async (req, res) => {
  try {
    const photo = await Photo.findById(req.params.id);
    if (!photo) {
      return res.status(404).json({ message: 'Photo not found' });
    }
    photo.upvotes++;
    await photo.save();
    res.json({ message: 'Photo upvoted successfully', photo });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;