import { Request, Response, query } from "express";
import { AlbumService } from "../services/service";

export class AlbumController {
  public create = (req: Request, res: Response): Response => {
    const service = new AlbumService();
    const newAlbum = service.create(req.body);
    return res.status(201).json(newAlbum);
  };
  public read = ({ query }: Request, res: Response): Response => {
    const service = new AlbumService();

    const queryParams = query.genre ? String(query.genre) : undefined;
    const albumList = service.read(queryParams);
    return res.status(200).json(albumList);
  };
  public readGenres = (_: Request, res: Response): Response => {
    const service = new AlbumService();
    const genreList = service.readGenres()
    
    
    return res.status(200).json(genreList);
  };
}
