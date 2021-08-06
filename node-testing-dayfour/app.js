const express = require('express');
const fs = require('fs');
const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/movies', (req, res) => {
    fs.readFile('db.json', (err, result) => {
        if (err) throw err;
        res.send(JSON.parse(result));
    })
})

app.get('/mytext', (req, res) => {
    fs.readFile('myText.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        res.send(data)
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})