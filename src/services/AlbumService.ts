import { Album, Prisma } from "@prisma/client";
import { AlbumCreate } from "../interfaces/index";
import { prisma } from "../database";
import { PromiseOr } from "sass";

export class AlbumService {
  public create = async (payload: AlbumCreate): Promise<Album> => {
    return await prisma.album.create({ data: payload });
  };

  public createMany = async(payload: Array<AlbumCreate>): Promise<Prisma.BatchPayload> => {
    return await prisma.album.createMany({data:payload});
  }

  public read = async (genre?: string | undefined): Promise<Array<Album>> => {
    if (genre) {
      return await prisma.album.findMany({ where: { genre } });
    }
    return await prisma.album.findMany();
  };

  public Partialupdate = async (
    albumId: number,
    payload: Partial<AlbumCreate>
  ): Promise<Album | null> => {
    return await prisma.album.update({ data: payload, where: { id: albumId } });
  };
  public delete = async (albumId: number): Promise<void> => {
    await prisma.album.delete({ where: { id: albumId } });
  };
}
