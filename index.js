// import modules
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const db = require('./config/dbconn');
const { compare, hash } = require('bcrypt');
const { stringify } = require('querystring');
const jwt = require('jsonwebtoken');
const localStorage = require('localStorage');

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
    res.setHeader("Access-Control-Allow-Methods", "*");
    next();
});

app.use(cors({
    origin: ['http://127.0.0.1:8080', 'http://localhost:8080'],
    credentials: true
 }));

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

// products
router.get('/products1', (req, res) => {
    res.status(200).sendFile('./views/products.html', {root:__dirname} );
});

// ___________________
// mysql (post get delete) data

// get all products
router.get('/products', (req, res) => {
    // mysql query
    const strQry = `
    SELECT Product_id, title, bookName, category, description, img, price, datereleased, created_by, img2 from products;
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
     SELECT Product_id, title, bookName, category, description, img, price, datereleased, created_by, img2  from products where Product_id = ?;
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

// create product
app.post('/products', bodyParser.json(), 
    (req, res)=> {
    try{
        
        const {title, bookName, category, description,img,price,datereleased,created_by, img2} = req.body; 
        console.log(title);
        // bd.totalamount = bd.quantity * bd.price;
        // Query
        const strQry = 
        `
        INSERT INTO products(title, bookName, category, description, img, price, datereleased, created_by, img2)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?);
        `;
        //
        db.query(strQry, 
            [title, bookName, category, description,img,price,datereleased,created_by, img2],
            (err, results)=> {
                if(err){
console.log(err)
                } else{
                    res.send(`number of affected row/s: ${results.affectedRows}`);
                }
              
            })
    }catch(e) {
        console.log(`Create a new product: ${e.message}`);
    }
});

// Update product
app.put('/products/:id', (req, res)=> {
    const bd = req.body;
    // Query
    const strQry = 
    `UPDATE products
     SET ?
     WHERE title = ?, bookName = ?, category = ?, description = ?, img = ?, price = ?, datereleased = ?, created_by = ?, img2 = ?`;

     db.query(strQry, 
        [bd.title, bd.bookName, bd.category, bd.description, bd.img, bd.price, bd.datereleased, bd.created_by, bd.img2],
        (err, results)=> {
            if(err){
console.log(err)
            } else{
                res.send(`number of affected row/s: ${results.affectedRows}`);
            }
    })
});

// Delete product
app.delete("/products/:id", (req, res) => {
    // QUERY
    const strQry = `
    DELETE FROM products
    WHERE Product_id = ?;
    ALTER TABLE products AUTO_INCREMENT = 1;
    `;
    db.query(strQry, [req.params.id], (err, data) => {
        if (err) throw err;
        res.send(`${data.affectedRows} PRODUCT/S WAS DELETED`);
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
        bd.password = await hash(bd.password, 16);
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
                    console.log(err);
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
            // const key = jwt.sign(JSON.stringify(results[0]), process.env.secret);
            // res.json({
            //     status: 200,
            //     results: key,
            // });
            // localStorage.setItem('key', JSON.stringify(key));
            // key = localStorage.getItem('key');

            switch(true){
                case (await compare(password,results[0].password)):
                res.redirect('/products1')
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
});

// get all users
router.get("/users", (req, res) => {
    const query = `SELECT * FROM users`;
    db.query(query, (err, results) => {
        if (err) throw err;
        // const key = jwt.sign(JSON.stringify(results[0]), process.env.secret);
        if (results.length < 1) {
            res.json({
                status: 204,
                results: "There are no users",
            });
        } else {
            res.json({
                status: 200,
                results: results,
            });
        }
    });

});

// get 1 product
router.get('/users/:id', (req, res) => {
    // mysql query
    const strQry = `
    SELECT * from users where id = ?;
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



// logout




module.exports = {  
    devServer: {    
     Proxy: '*'  }
  }

