import { Request, Response } from "express";
import { GenreService } from "../services";

export class GenreController {
  private genreService: GenreService = new GenreService();

  public read = async (_: Request, res: Response): Promise<Response> => {
    return res.status(200).json(await this.genreService.read());
  };
}
