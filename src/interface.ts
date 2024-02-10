type TAlbum = {
  id: number;
  title: string;
  genre: string;
  band: string;
  year: number;
  price: string;
};

type AlbumCreate = Omit<TAlbum, "id">;

type TGenreList  = {
  genres: Array<string>
}

export { TAlbum, AlbumCreate, TGenreList };
