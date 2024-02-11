import { Router } from "express";
import { AlbumController } from "../controllers/Album.controller";
import { EnsureMiddleware } from "../middlewares/EnsureMiddleware";


export const albumRouter: Router = Router();
const albumController = new AlbumController();
const ensureMiddleware = new EnsureMiddleware()

albumRouter.post("/", albumController.create);
albumRouter.post("/many", albumController.createMany);
albumRouter.get("/", albumController.read);


albumRouter.use("/:albumId", ensureMiddleware.idExists) //middleware

albumRouter.get("/:albumId", albumController.retrive )
albumRouter.patch("/:albumId", albumController.partialUpdate)
albumRouter.delete("/:albumId", albumController.delete)