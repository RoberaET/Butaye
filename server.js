const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`💕 Valentine's Day website is running! 💕`);
    console.log(`🌐 Open your browser and visit: http://localhost:${PORT}`);
    console.log(`Press Ctrl+C to stop the server`);
});
