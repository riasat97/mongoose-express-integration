import express from "express";
import { getBooksByGenre, getBooksByGenreAndPublisher, getBooksOnFantasy, setBookPricesTypeToInt, getFeaturedBooks} from "./book.controller";
const router= express.Router();

router.get('/featured-books',getFeaturedBooks);
router.get('/books-on-fantasy',getBooksOnFantasy);
router.get('/books-by-genre-publisher',getBooksByGenreAndPublisher);
router.get('/:genre',getBooksByGenre);
router.patch('/udpate-book-prices-type', setBookPricesTypeToInt)

export default router;