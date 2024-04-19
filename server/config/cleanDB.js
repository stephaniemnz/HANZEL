const { User, Photo } = require('../models');

module.exports = async (modelName, collectionName) => {
  try {
    let Model;
    switch (modelName) {
      case 'User':
        Model = User;
        break;
      case 'Photos':
        Model = Photo;
        break;
      // Add cases for other models if needed

      default:
        throw new Error('Invalid model name');
    }

    let modelExists = await Model.exists({ name: collectionName });


    if (modelExists && modelExists.length) {
      // Collection exists and has at least one element, proceed with dropping the collection
      await Model.collection.drop();
  } else {
      // Collection does not exist or is empty, create the collection
      await Model.createCollection();
  }
  
  } catch (err) {
    throw err;
  }
};
