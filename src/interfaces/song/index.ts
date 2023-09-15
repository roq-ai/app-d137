import { AlbumSongInterface } from 'interfaces/album-song';
import { PlaylistInterface } from 'interfaces/playlist';
import { GetQueryInterface } from 'interfaces';

export interface SongInterface {
  id?: string;
  title: string;
  artist: string;
  duration: number;
  genre: string;
  playlist_id: string;
  created_at?: any;
  updated_at?: any;
  album_song?: AlbumSongInterface[];
  playlist?: PlaylistInterface;
  _count?: {
    album_song?: number;
  };
}

export interface SongGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  artist?: string;
  genre?: string;
  playlist_id?: string;
}
