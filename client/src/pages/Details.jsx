import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const GET_IMAGE_DETAILS = gql`
  query GetImageDetails($imageId: ID!) {
    getImageDetails(imageId: $imageId) {
      id
      title
      description
      imageUrl
      price   
    }
  }
`;

function Details() {
  const { imageId } = useParams();
  const { loading, error, data } = useQuery(GET_IMAGE_DETAILS, {
    variables: { imageId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { title, description, imageUrl, price } = data.getImageDetails;

  return (
    <div>
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} />
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}

export default Details;