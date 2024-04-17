import React, { useState, useEffect } from 'react';

const Photo = ({ photoId }) => {
  const [upvotes, setUpvotes] = useState(0);

  useEffect(() => {
    const fetchUpvotes = async () => {
      try {
        // Simulating a fetch request using setTimeout
        // Replace this with your actual fetch logic
        setTimeout(() => {
          // Example: Fetch upvote count from server
          const initialUpvotes = Math.floor(Math.random() * 100); // Example initial upvote count
          setUpvotes(initialUpvotes);
        }, 1000); // Simulate loading for 1 second
      } catch (error) {
        console.error('Error fetching upvotes:', error);
      }
    };

    fetchUpvotes();

  }, [photoId]); // Fetch upvotes when photoId changes

  const handleUpvote = () => {
    // Update upvote count locally
    setUpvotes(prevUpvotes => prevUpvotes + 1);
    // Example: Make API request to server to upvote photo
    // Replace this with your actual upvote logic
    console.log('Upvoted photo:', photoId);
  };

  return (
    <div>
      <img src={`https://example.com/photos/${photoId}`} alt="Photo" />
      <p>Upvotes: {upvotes}</p>
      <button onClick={handleUpvote}>Upvote</button>
    </div>
  );
};

export default Photo;