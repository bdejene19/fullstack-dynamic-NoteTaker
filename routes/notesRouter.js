const notes = require('express').Router();
const { v4: uuid } = require('uuid');

const { readFromFile, readAndAppend } = require('../helpers/helpersDB');
notes.get('/', (req, res) => {
    readFromFile('./db/db.json')
    .then((data) => {
        let parsedData = JSON.parse(data);
        res.json(parsedData);
    })
})

notes.post('/', (req, res) => {
    const { title, text } = req.body;
    const newPost = {
        id: uuid(),
        title: title,
        text: text
    }
    console.log(`${req.method} fired on /api/notes`)
    readAndAppend(newPost, './db/db.json')
    res.json('success')
})


notes.delete('/:id', (req, res) => {
    console.log(`${req.method} `)
})

module.exports = notes;