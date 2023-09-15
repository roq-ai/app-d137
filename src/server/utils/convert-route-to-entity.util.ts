const mapping: Record<string, string> = {
  albums: 'album',
  'album-songs': 'album_song',
  organizations: 'organization',
  playlists: 'playlist',
  songs: 'song',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
