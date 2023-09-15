import { SongInterface } from 'interfaces/song';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PlaylistInterface {
  id?: string;
  name: string;
  description?: string;
  organization_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  song?: SongInterface[];
  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {
    song?: number;
  };
}

export interface PlaylistGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  organization_id?: string;
  user_id?: string;
}
