import express, { Application } from "express";
import cors from "cors";
import bookRoutes from './app/modules/book/book.route';
const app: Application = express();


// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//test
app.use('/api/v1/books', bookRoutes);


export default app;