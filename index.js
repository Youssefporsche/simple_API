const express = require('express');
const app = express(); // allows for different http routes

// const port = process.env.PORT || 5000 ;

const stripe = require('stripe')('sk_test_YOUR_KEY');
app.use(express.json());

app.post('/api/add', async (req, res) => {

    const API_Key  = req.query.apiKey;

    var a = req.body.firstNumber ;
    var b = req.body.seconedNumber ;
  
    if (!API_Key) {
      res.sendStatus(400); // bad request
    }
  
    // TODO validate apiKey
  
    res.send({ data: a+b});
  
  });

app.listen(  5000 , () => console.log('Server is running now'));