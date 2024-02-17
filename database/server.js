import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import coffeeRouter from './controllers/coffeeControllers.js'
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


console.log(process.env.MONGODB_URI);
const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
 .then((result) => {
   console.log('MongoDB\'ye bağlanıldı');
 })
 .catch((err) => {
   console.log(err);
 });

// app.use('/api/user', userRouter)
app.use('/api/veri', coffeeRouter)

const port = 8000;
app.listen(port, () => {
  console.log(`Port dinleniyor: ${port}`);
});
