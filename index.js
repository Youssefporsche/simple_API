import express, { json } from 'express';
const app = express(); // allows for different http routes

// const port = process.env.PORT || 5000 ;
 const port = 5000 ;
//const stripe = require('stripe')('sk_test_YOUR_KEY');
app.use(json());

app.post('/api/add', async (req, res) => {

    //const API_Key  = req.query.apiKey;

    var a = req.body.firstNumber ;
    var b = req.body.seconedNumber ;
  
    // if (!API_Key) {
    //   res.sendStatus(400); // bad request
    // }
  
    // TODO validate apiKey
  res.send("The summation result is : " + (a+b) )
    
  
  });

  app.post('/add/:num1/:num2/:num3', async (req, res) => {
    
    var a = parseInt(req.params.num1) ;
    var b = parseInt(req.params.num2) ;
    var c = parseInt(req.params.num3) ;
    const res = a+b*c ;

    res.send("The result is : " + (parseInt(res)) )
  
   });


app.listen(  port , () => console.log('Server is running now on port ' + port));