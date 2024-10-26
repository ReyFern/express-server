const express = require('express');
const app = express();

const port = 3000;

// BASIC ROUTING

/*
// POST method sends data to server to update/create resource
app.post('/', (req, res) => {
    res.send('Got a POST request');
});

// PUT method sends data to server to update resource
app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
});

// DELETE method sends data to server to delete resource
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
});
*/

/*
// express.static(root, [options]) serves static files in root directory
// Below will serve anything in 'public' directory
app.use(express.static('public'));
*/

// This does the same as the above
// It uses the absolute path which is safer
const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// Boiler-plate error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});