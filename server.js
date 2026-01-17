const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from 'public' directory
app.use(express.static('public'));

app.post('/api/login', (req, res) => {
    console.log('--- CAPTURED DATA ---');
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    console.log('---------------------');
    
    // Send a response so the browser doesn't hang, but simple enough to be just a confirmation
    res.send(`
        <h1>Data Captured!</h1>
        <p>Check your server console and Wireshark.</p>
        <p><a href="/">Go Back</a></p>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log('Ready to capture packets!');
});
