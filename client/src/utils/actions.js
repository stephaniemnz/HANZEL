
export const UPVOTE_PHOTO = "UPVOTE_PHOTO";

export const upvotePhoto = (photoId) => {
  return {
    type: UPVOTE_PHOTO,
    payload: photoId, 
  };
};


