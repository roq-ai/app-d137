import { AlbumInterface } from 'interfaces/album';
import { SongInterface } from 'interfaces/song';
import { GetQueryInterface } from 'interfaces';

export interface AlbumSongInterface {
  id?: string;
  album_id: string;
  song_id: string;
  created_at?: any;
  updated_at?: any;

  album?: AlbumInterface;
  song?: SongInterface;
  _count?: {};
}

export interface AlbumSongGetQueryInterface extends GetQueryInterface {
  id?: string;
  album_id?: string;
  song_id?: string;
}
