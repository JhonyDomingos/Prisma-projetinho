import express, { Application } from "express";
import { albumRouter } from "./router/album.routes";
import { genreRouter } from "./router/genre.routes";

const app: Application = express();
app.use(express.json());

app.use("/api/albums", albumRouter);
app.use("/api/genres", genreRouter);

export default app;
