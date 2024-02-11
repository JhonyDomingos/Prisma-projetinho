import { NextFunction, Request, Response } from "express";
import { prisma } from "../database";

export class EnsureMiddleware {
    public idExists = async (req: Request , res: Response, next: NextFunction): Promise <Response | void>  => {
        const {albumId} = req.params;
        const foundAlbum = await prisma.album.findFirst({
            where: {id: Number(albumId)},
        })
        if(!foundAlbum) {
            return res.status(404).json({message: "Album not found."})
        }

        res.locals = {
            foundAlbum, 
            
        }

        return next()
    }
}