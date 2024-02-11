import { Request, Response } from "express";
import { AlbumService } from "../services";

export class AlbumController {
  private albumService: AlbumService = new AlbumService();

  public create = async (req: Request, res: Response): Promise<Response> => {
    const newAlbum = await this.albumService.create(req.body);
    return res.status(201).json(newAlbum);
  };
  public createMany = async (req: Request, res: Response): Promise<Response> => {
    const count = await this.albumService.createMany(req.body);
    return res.status(201).json(count);
  };
  public read = async (
    { query }: Request,
    res: Response
  ): Promise<Response> => {
    const queryParams = query.genre ? String(query.genre) : undefined;
    const albumList = await this.albumService.read(queryParams);
    return res.status(200).json(albumList);
  };

  public retrive = (_: Request, res: Response): Response => {
    return res.status(200).json(res.locals.foundAlbum);
  };
  public partialUpdate = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const albumId = Number(req.params.albumId);
    const album = await this.albumService.Partialupdate(albumId, req.body);

    return res.status(200).json(album);
  };
  public delete = async (req: Request, res: Response): Promise<Response> => {
    await this.albumService.delete(Number(req.params.albumId));
    return res.status(204).json();
  };
}
