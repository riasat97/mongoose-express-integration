import { Model, Schema, model } from "mongoose";
import { BookModel, IBook } from "./book.interface";

const bookSchema = new Schema<IBook,BookModel>({
    title: { type: String, required: true },
    author: { type: [String], required: true },
    genre: { type: String, required: true },
    publicationYear: { type: Number, required: true },
    publisher: {
        name: { type: String, required: true },
        location: { type: String, required: true },
    },
    reviews: [
        {
            user: { type: String, required: true },
            comment: { type: String, required: true },
        },
    ],
    rating: { type: Number, required: true },
    price: { type: String, required: true },
});

//Static Method
bookSchema.statics.getFeaturedBooks = async function (): Promise<IBook[]> {
    try {
      const featuredBooks = await this.aggregate([
        {
          $match: { rating: { $gte: 4 } }, 
        },
        {
          $addFields: {
            featured: {
              $cond: [
                { $gt: ['$rating', 4.5] }, 
                'BestSeller',
                'Popular',
              ],
            },
          },
        },
      ]);
  
      return featuredBooks;
    } catch (error) {
      throw new Error('Failed to retrieve featured books');
    }
  };

//model
const Book = model<IBook,BookModel>("Book", bookSchema);

export default Book;