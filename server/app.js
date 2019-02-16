const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const userInfo = require('./userInfo');
const connection = mysql.createConnection(userInfo);

app.set('port', process.env.PORT || 4000);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get(['/', '/index.html'], (req, res, next) => {
    res.send('index');
});

app.get('/api/join', cors(), (req, res, next) => {
    connection.query('SELECT * FROM board', (err, rows) => {
        if(err) console.log('Error:', err);
        res.send(rows);
    })
});

app.post('/api/join', cors(), (req, res, next) => {
    console.log(req.body);
    const sql = 'INSERT INTO board (id, name, age) VALUES (?, ?, ?)';
    connection.query(sql, [req.body.id, req.body.name, req.body.password], (err, rows) => {
        if(err) console.log('Error', err);
        res.send({ status: 'SUCCESS' });
    });
});

app.listen(app.get('port'), () => {
    console.log('server start');
});