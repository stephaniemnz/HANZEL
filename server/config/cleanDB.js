const mongoose = require('mongoose'); // Ensure mongoose is required at the top
const models = require('../models');

module.exports = async (modelName, collectionName) => {
  try {
    if (!models[modelName]) {
      throw new Error(`Model '${modelName}' not found.`);
    }

    const model = models[modelName];

    // Ensure the database connection is ready
    await mongoose.connection; // Use mongoose.connection directly

    // Check if the collection exists
    const collections = await mongoose.connection.db.listCollections({ name: collectionName }).toArray();
    const collectionExists = collections.some(collection => collection.name === collectionName);

    if (collectionExists) {
      // If the collection exists, drop it
      await mongoose.connection.db.dropCollection(collectionName);
      console.log(`Collection '${collectionName}' successfully dropped.`);
    } else {
      console.log(`No collection named '${collectionName}' exists.`);
    }
  } catch (err) {
    console.error(`Error in cleaning DB for model '${modelName}': ${err}`);
    throw err;
  }
};



// module.exports = async (modelName, collectionName) => {
//   try {
//     let Model;
//     switch (modelName) {
//       case 'User':
//         Model = User;
//         break;
//       case 'Photos':
//         Model = Photo;
//         break;
//       // Add cases for other models if needed

//       default:
//         throw new Error('Invalid model name');
//     }

//     let modelExists = await Model.exists({ name: collectionName });


//     if (modelExists && modelExists.length) {
//       // Collection exists and has at least one element, proceed with dropping the collection
//       await Model.collection.drop();
//   } else {
//       // Collection does not exist or is empty, create the collection
//       await Model.createCollection();
//   }
  
//   } catch (err) {
//     throw err;
//   }
// };
