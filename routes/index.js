// my /api file



// require modular routes 
const notes = require('./notesRouter')

const app = require('express').Router();

app.use('/notes', notes);

module.exports = app;