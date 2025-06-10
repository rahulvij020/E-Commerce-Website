const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/auth.route');
const productRoutes = require('./routes/product.route');
const cartRoutes = require('./routes/cart.route');
const paymentRoutes = require('./routes/payment.route');
const {connectDB} = require('./lib/db');

const app = express();
dotenv.config();

app.use(express.json()); 
app.use(cookieParser());
app.use('/api/auth',authRoutes);
app.use('/api/products',productRoutes);
app.use('/api/cart',cartRoutes);
app.use('/api/payments',paymentRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT,() => {
    console.log(`Server is running at address http://localhost:${PORT}`);
    connectDB();
})