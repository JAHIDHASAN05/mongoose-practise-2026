import { NextFunction, Request, Response } from "express";

const notFound = (req: Request, res: Response, next: NextFunction) => {
    // 1. Log to the console for your own debugging
    console.error(`404 - Not Found: ${req.method} ${req.originalUrl}`);

    // 2. Return the info in the response so the frontend knows what failed
    return res.status(404).json({ // Changed to 404 as it's more semantically correct
        success: false,
        message: "API not found!!",
        path: req.originalUrl,
        method: req.method,
        error: `The requested path ${req.originalUrl} does not exist on this server.`
    });
};

export default notFound;