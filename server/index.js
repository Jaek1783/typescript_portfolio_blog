// require('dotenv').config();
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 4000;

const db = require('./dbConfig');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.listen(PORT,function(){
    db.query('SELECT * FROM contact', function (error, results) {
  if (error) throw error;
});
});

app.use('/',(req,res)=>{
  const email = req.body.email;
  const name = req.body.name;
  const desc = req.body.desc;

  db.query(`insert into contact(user_email,user_name,user_desc) 
  value (?,?,?)`,
  [email, name, desc], 
  (err, results)=>{
      if(err) throw err;
      res.status(200).send(results);
  })
});
// app.use('/api/contact',(req,res)=>{
//     const email = req.body.email;
//     const name = req.body.name;
//     const desc = req.body.desc;
//     console.log(email,name,desc);
//     db.query('SELECT * FROM contact', function (error, results) {
//         if (error) throw error;
//         res.send(results);
//       });
//     db.query(`insert into contact(user_email,user_name,user_desc) 
//     value (?,?,?)`,
//     [email, name, desc], 
//     (err, results)=>{
//         if(err) throw err;
//         res.send(results);
//     })
// });