import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

require('dotenv').config()



async function main() {

    try {
        // MongoDB Atlas connection string
        const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.g8xlopp.mongodb.net/practice-mongoose?retryWrites=true&w=majority`;

        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Mongoose app listening on port ${port}`)
        })
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }

}
main();
