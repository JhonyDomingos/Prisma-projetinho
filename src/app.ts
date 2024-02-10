import express, { Application } from "express";
import { AlbumController } from "./controllers/controller";
const app: Application = express();
app.use(express.json())

const albumController = new AlbumController();

app.post("/api/albums", albumController.create);
app.get("/api/albums", albumController.read);
app.get("/api/genres", albumController.readGenres);

export default app;
