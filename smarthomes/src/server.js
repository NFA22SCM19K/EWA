const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

const app = express();
const port = 3001; // Choose a port for your Node.js server
console.log(port)
app.use(cors());

app.use(bodyParser.json());

let db; // MongoDB connection

// Connect to MongoDB
MongoClient.connect('mongodb://localhost:27017/webappreviews', { useNewUrlParser: true, useUnifiedTopology: true  }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  // db = client.db('webappreviews'); // Use your MongoDB database name
  
  // Start the server after connecting to MongoDB
  app.listen(port, 'localhost', () => {
    console.log(`Server is running on port ${port}`);
  });
});

// API endpoint to add a review
app.post('/api/addReview', (req, res) => {
  const reviewDetail = req.body;
  addReview(reviewDetail);
  res.send('Review added successfully');
});

// API endpoint to get all reviews
app.get('/api/getAllReviews', (req, res) => {
  console.log(port)
  const allReviews = getAllReviews();
  res.json(allReviews);
});

// Function to add a review to MongoDB
function addReview(reviewDetail) {
  const reviews = db.collection('reviews');
  reviews.insertOne(reviewDetail, (err, result) => {
    if (err) {
      console.error('Error adding review:', err);
    } else {
      console.log('Review added:', result.ops);
    }
  });
}

// Function to get all reviews from MongoDB
function getAllReviews() {
  const reviews = db.collection('reviews');
  return reviews.find().toArray();
}

app.get('/api/getProductReviews/:id', (req, res) => {
    const productId = req.params.id;
    const productReviews = getProductReviews(productId);
    res.json(productReviews);
  });
  
  // Function to get reviews for a specific product from MongoDB
  function getProductReviews(productId) {
    const reviews = db.collection('reviews');
    return reviews.find({ productId: Number(productId) }).toArray();
  }
