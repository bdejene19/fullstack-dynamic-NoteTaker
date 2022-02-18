const notes = require('express').Router();
const { v4: uuid } = require('uuid');

const { readFromFile, readAndAppend, readAndDelete } = require('../helpers/helpersDB');
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
    readAndAppend(newPost, './db/db.json')
    console.log('sent request')
    res.json('success adding new post')
})


notes.delete('/:id', (req, res) => {
    const deleteId = req.params.id;
    readAndDelete(deleteId, './db/db.json');
    res.json('success deleting old post')
})

module.exports = notes;