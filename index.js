// import modules
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const db = require('./config/dbconn');
const { compare, hash } = require('bcrypt');

// variable add express
const app = express();
// express router
const router = express.Router();
// cors app

// Configuration
const port = parseInt(process.env.PORT) || 4000;

// __________________
// allow access to fetch data from the api externally by  Seting header
app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});

// __________________
// add cors to the app variable
app.use(router, cors(), express.json(), 
    express.urlencoded({
    extended: true})
);

// activate server
app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});

// __________________
// NAV ROUTER

// home
router.get('/', (req, res) => {
    res.status(200).sendFile('./views/index.html', {root:__dirname} );
});
// register
router.get('/register', (req, res) => {
    res.status(200).sendFile('./views/register.html', {root:__dirname} );
});
// login
router.get('/login', (req, res) => {
    res.status(200).sendFile('./views/login.html', {root:__dirname} );
});

// ___________________
// mysql (post get delete) data

// get all products
router.get('/products', (req, res) => {
    // mysql query
    const strQry = `
    SELECT Product_id, title, bookName, category, description, img, price, datereleased, created_by  from products;
    `;

    // error controll
    db.query(strQry, (err, results) => {
        if(err) throw err;
        res.json({
            status: 200,
            results: results
        })
        console.log(err)
    });

});

// get 1 product
router.get('/products/:id', (req, res) => {
     // mysql query
     const strQry = `
     SELECT Product_id, title, bookName, category, description, img, price, datereleased, created_by  from products where Product_id = ?;
     `;

      // error controll
    db.query(strQry, [req.params.id], (err, results) => {
        if(err) throw err;
        res.json({
            status: 200,
            results: (results.length <= 0) ? 'Sorry no product was found.' : results
        })
    });

});

console.log(bodyParser.json())

