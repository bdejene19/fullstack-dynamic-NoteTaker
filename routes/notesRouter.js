const notes = require('express').Router();
const notes_db = require('../db/db.json');
const fs = require('fs');

notes.get('/', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('error fetching data from db');
        } else {
            let parsedData = JSON.parse(data);
            res.json(parsedData);
        }
    });
})

notes.post('/', (req, res) => {
    console.log(`${req.method} fired on /api/notes`)
})
module.exports = notes;