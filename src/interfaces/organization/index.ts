import { AlbumInterface } from 'interfaces/album';
import { PlaylistInterface } from 'interfaces/playlist';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  album?: AlbumInterface[];
  playlist?: PlaylistInterface[];
  user?: UserInterface;
  _count?: {
    album?: number;
    playlist?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
