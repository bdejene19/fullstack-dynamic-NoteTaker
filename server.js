// bring in required 
const express = require('express');
const path = require('path');

// bring in all other routes 
const api = require('./routes/index');
const app = express();

// use middleware
app.use(express.json());
app.use(express.urlencoded({ urlencoded: true }));

app.use(express.static('public'));
app.use('/api', api);

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, (err) => err ? console.log('error occured trying to run sever') : console.log(`Server running at http://localhost:${PORT}`))