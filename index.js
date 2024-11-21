const express = require('express');
const cors = require('cors');

const app = express();
const port = 3010;

app.use(express.static('static'));
app.use(cors());

app.use('/', require('./routes'));

let taxRate = 5;
let discountPercentage = 10;
let loyaltyRate = 2;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
