import { IBook } from "./book.interface";
import Book from "./book.model";

export const findBooksByGenre = async (genre: string): Promise<IBook[]> => {
    try {
        const books = await Book.find({ genre });
        return books;
    } catch (error) {
        console.error(error);
        throw error;
    }

}

export const findBooksOnFantasy = async (): Promise<IBook[]> => {
    try {
        const books = await Book.find({ genre: 'Fantasy' });
        return books;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const findBooksByGenreAndPublisher = async (): Promise<IBook[]> => {
    const genre = "Sci-Fi";
    const publisher = "Roli Books";
    try {
        const books = await Book.find({ genre: genre, 'publisher.name': publisher });
        return books;
    } catch (error) {
        console.error(error);
        throw error;
    }

}

export const updateBookPricesType = async () => {
    try {
        const result = await Book.updateMany(
            { "publicationYear": { $gt: 2020 } },
            [
                { $set: { "price": { $toInt: "$price" } } }
            ]
        );
        console.log(`Updated ${result.nModified} books.`);
        return result;

    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const findFeaturedBooks = async (): Promise<IBook[]> => {
    try {
        const books = await Book.getFeaturedBooks();
        return books;
    } catch (error) {
        console.error(error);
        throw error;
    }

}