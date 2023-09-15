import axios from 'axios';
import queryString from 'query-string';
import { AlbumSongInterface, AlbumSongGetQueryInterface } from 'interfaces/album-song';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAlbumSongs = async (
  query?: AlbumSongGetQueryInterface,
): Promise<PaginatedInterface<AlbumSongInterface>> => {
  const response = await axios.get('/api/album-songs', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAlbumSong = async (albumSong: AlbumSongInterface) => {
  const response = await axios.post('/api/album-songs', albumSong);
  return response.data;
};

export const updateAlbumSongById = async (id: string, albumSong: AlbumSongInterface) => {
  const response = await axios.put(`/api/album-songs/${id}`, albumSong);
  return response.data;
};

export const getAlbumSongById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/album-songs/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAlbumSongById = async (id: string) => {
  const response = await axios.delete(`/api/album-songs/${id}`);
  return response.data;
};
