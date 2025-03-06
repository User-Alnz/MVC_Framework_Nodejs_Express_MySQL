import { Request, Response, NextFunction } from "express";

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.message);
    res.status(500).send({ errors: [{ message: "Something went wrong" }] });
};

export default errorHandler;