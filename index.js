const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));



// Middlewware
app.use(express.static('pages'));
app.use(express.json());



app.listen(port, () => {
    console.log('Server started at http://localhost:' + port)
})