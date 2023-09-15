import * as yup from 'yup';

export const albumSongValidationSchema = yup.object().shape({
  album_id: yup.string().nullable().required(),
  song_id: yup.string().nullable().required(),
});
