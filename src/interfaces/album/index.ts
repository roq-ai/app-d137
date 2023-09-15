import { AlbumSongInterface } from 'interfaces/album-song';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AlbumInterface {
  id?: string;
  name: string;
  description?: string;
  release_date: any;
  organization_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  album_song?: AlbumSongInterface[];
  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {
    album_song?: number;
  };
}

export interface AlbumGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  organization_id?: string;
  user_id?: string;
}
