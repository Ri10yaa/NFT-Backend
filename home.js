import express from 'express';
import bodyParser from 'body-parser';
import User_routes from './Routes/user.js';
import Product_routes from './Routes/product.js';

const app=express();
const PORT=5600;

app.use(bodyParser.json());

app.use('/users',User_routes);

app.use('/products',Product_routes);

app.get('/',(req, res) => res.send(console.log('Running!!')));

app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`));
