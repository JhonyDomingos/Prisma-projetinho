import database from "./database";
import { AlbumCreate, TAlbum, TGenreList } from "./interface";

export class AlbumService {
  private genderNexId = (): number => {
    const lastAlbum: TAlbum | undefined = database
      .sort((a, b) => a.id - b.id)
      .at(-1);
    if (lastAlbum) return lastAlbum.id + 1;

    return 1;
  };
  public create = (payload: AlbumCreate): TAlbum => {
    const newAlbum: TAlbum = {
      id: this.genderNexId(),
      ...payload,
    };

    database.push(newAlbum);
    return newAlbum;
  };

  public read = (genre?: string | undefined): Array<TAlbum> => {
    if (genre) {
      /**
       * const fn = (a: TAlbum) => a.genre.toLowerCase() === genre.toLowerCase()
       * return database.filter(fn)
       * colocando a callback em um função separada e retornando ela no filter ( outra maneira de fazer )
       */
      return database.filter(
        (a: TAlbum) => a.genre.toLowerCase() === genre.toLowerCase()
      );
    }
    return database;
  };

  public readGenres = (): TGenreList => {
    // classe para operações matematicas dados unicos, então ele remove os dados duplicados
    const uniqueValues = new Set(database.map(({ genre }) => genre));
    return { genres: [...uniqueValues] };
  };
}
