import { Album } from "@prisma/client";
// type TAlbum = {
//   id: number;
//   title: string;
//   genre: string;
//   band: string;
//   year: number;
//   price: string;
// };

type AlbumCreate = Omit<Album, "id">;

 export {  AlbumCreate };
