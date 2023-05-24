import express, { Application, Request, Response, NextFunction } from "express";
import { findBooksByGenre, findBooksByGenreAndPublisher, findBooksOnFantasy, findFeaturedBooks, updateBookPricesType } from "./book.service";

export const getBooksByGenre= async(req: Request, res: Response, next: NextFunction) => {
    const { genre } = req.params;
    const books= await findBooksByGenre(genre);
    res.status(200).send({
        status:'success',
        data: books
    });
}

export const getBooksOnFantasy= async(req: Request, res: Response, next: NextFunction) => {
    const books= await findBooksOnFantasy();
    res.status(200).send({
        status:'success',
        data: books
    });
}

export const getBooksByGenreAndPublisher= async(req: Request, res: Response, next: NextFunction) => {
    const books= await findBooksByGenreAndPublisher();
    res.status(200).send({
        status:'success',
        data: books
    });
}

export const setBookPricesTypeToInt= async(req: Request, res: Response, next: NextFunction) => {
    const books= await updateBookPricesType();
    res.status(200).send({
        status:'success',
        data: books
    });
}

export const getFeaturedBooks= async(req: Request, res: Response, next: NextFunction) => {
    const books= await findFeaturedBooks();
    res.status(200).send({
        status:'success',
        data: books
    });
}