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



// Configuration
const port = parseInt(process.env.PORT) || 4000;

// __________________
// allow access to fetch data from the api externally by  Seting header
app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
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

// ___________________
// login & register
db.connect( (err) => {
    if(err){
        console.log(err)
    } else{
        console.log('mySQL connected...')
    }
});

// Register
app.post('/register',bodyParser.json(), 
    async (req, res)=> {
    try{
        const bd = req.body; 
     
        // Encrypting a password
        // Default value of salt is 10. 
        bd.password = await hash(bd.password, 11);
        // Query

        const strQry = 
        `
        INSERT INTO users(fullname, email, password, userRole, phone_number, join_date)
        VALUES(?, ?, ?, ?, ?, ?);
        `;
        db.query(strQry, 
            [bd.fullname, bd.email, bd.password, bd.userRole,bd.phone_number, bd.join_date],
            (err, results)=> {
                if(err) {
                    console.log(err)
                } else{
                    console.log(results);
                }
            })
    }catch(e) {
        console.log(`From registration: ${e.message}`);
    }
});

// Login
app.post('/login', bodyParser.json(),
    (req, res)=> {
    try{

        // Get email and password
        const { email, password } = req.body;
        const strQry = 
        `
        SELECT email, password
        FROM users 
        WHERE email = '${email}';
        `;
        db.query(strQry, async (err, results)=> {
            if(err) throw err;

            switch(true){
                case (await compare(password,results[0].password)):
                    res.send("alert('Well done')");
                // res.send("Welcome "+results[0].firstname)
                break
                default: 
                console.log("Bye");
            }

            // res.json({
            //     status: 200,
            //     results: (await compare(userpassword,
            //         results[0].userpassword)) ? results : 
            //         'You provided a wrong email or password'
            // })
        })
    }catch(e) {
        console.log(`From login: ${e.message}`);
    }
})

console.log(bodyParser.json())

