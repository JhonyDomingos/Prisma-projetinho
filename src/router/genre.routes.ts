import { Router } from "express";

import { GenreController } from "../controllers/genre.controller";

export const genreRouter: Router = Router()
const genreController = new GenreController()


genreRouter.get("/", genreController.read);