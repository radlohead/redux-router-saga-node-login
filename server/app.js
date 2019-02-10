const mysql = require('mysql2');
const express = require('express');
const app = express();
const userInfo = require('./userInfo');
const connection = mysql.createConnection(userInfo);

app.set('port', process.env.PORT || 4000);

app.get(['/', '/index.html'], (req, res, next) => {
    res.send('index');
});

app.get('/api/join', (req, res, next) => {
    connection.query('SELECT * FROM board', (err, rows) => {
        if(err) console.log('Error:', err);
        res.send(rows);
    })
});

app.post('/api/join', (req, res, next) => {
    connection.query('INSERT INTO board (id, name) VALUES(4, test)', (err, rows) => {
        if(err) console.log('Error', err);
        res.send(rows);
    })
})

app.listen(app.get('port'), () => {
    console.log('server start');
});