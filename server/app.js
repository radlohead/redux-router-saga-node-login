const mysql = require('mysql2');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const userInfo = require('./userInfo');
const connection = mysql.createConnection(userInfo);

app.set('port', process.env.PORT || 4000);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE');
    res.header('Access-Control-Request-Method', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Secrete_Token');
    next();
});

app.post('/api/login', (req, res, next) => {
    const sql = 'SELECT * FROM join_users WHERE id=? AND password=?';
    connection.query(sql, [req.body.id, req.body.password], (err, rows) => {
        if(err) console.log('Error', err);
        if(rows.length) {
            res.json({ status: true });
        } else res.json({ status: false });
    });
});

app.get('/api/join', (req, res, next) => {
    connection.query('SELECT * FROM join_users', (err, rows) => {
        if(err) console.log('Error:', err);
        res.send(rows);
    });
});

app.post('/api/join', (req, res, next) => {
    console.log(req.body);
    const jwtEncoded = jwt.sign({ password: req.body.password }, 'minho')
    const sql = 'INSERT INTO join_users (name, id, password) VALUES (?, ?, ?)';
    connection.query(sql, [req.body.name, req.body.id, jwtEncoded], (err, rows) => {
        if(err) console.log('Error', err);
        res.send({ status: 'SUCCESS' });
    });
});

app.listen(app.get('port'), () => {
    console.log('server start');
});