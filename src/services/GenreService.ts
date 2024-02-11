import { prisma } from "../database";
import { TGenreList } from "../interfaces";

export class GenreService {
  public read = async (): Promise<TGenreList> => {
    
    const uniqueValues = await prisma.album.findMany({
      distinct: "genre",
      select: { genre: true },
    });
    return { genres: uniqueValues.map(({genre}) => genre) };
  };
}
