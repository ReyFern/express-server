app.get('/', (req, res) => {
    res.send('This is a JavaScript file');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});