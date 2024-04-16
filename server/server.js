const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Static files
app.use(express.static(path.join(__dirname, '/')));

// Handle 404
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});