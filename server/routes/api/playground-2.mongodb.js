// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('HANZEL-GALLERY');

// Define an array of photo documents
const photoDocuments = [
  { title: 'Photo 1', description: 'Description for photo 1', imageUrl: 'https://hanzel-gallery.s3.us-east-2.amazonaws.com/28C977D2-F715-462F-83F7-51A690E83C65_1_105_c.jpeg' },
  { title: 'Photo 2', description: 'Description for photo 2', imageUrl: 'https://hanzel-gallery.s3.us-east-2.amazonaws.com/F99CB744-DE74-4C57-9416-47BE4DA31B9D_1_105_c.jpeg' },
  { title: 'Photo 3', description: 'Description for photo 3', imageUrl: 'https://hanzel-gallery.s3.us-east-2.amazonaws.com/B43E987F-A2BD-4343-A2E8-A36B29089E42_1_105_c.jpeg' },
  { title: 'Photo 4', description: 'Description for photo 4', imageUrl: 'https://hanzel-gallery.s3.us-east-2.amazonaws.com/7FA125D0-094E-4D91-9D64-F48EC8D080C5_1_105_c.jpeg' },
  { title: 'Photo 5', description: 'Description for photo 5', imageUrl: 'https://hanzel-gallery.s3.us-east-2.amazonaws.com/A46DD678-F12E-4657-9908-80C5BF504568_1_105_c.jpeg' },
  { title: 'Photo 6', description: 'Description for photo 6', imageUrl: 'https://hanzel-gallery.s3.us-east-2.amazonaws.com/A46DD678-F12E-4657-9908-80C5BF504568_1_105_c.jpeg' }
];

// Insert all photo documents at once
db.getCollection('photos').insertMany(photoDocuments);
