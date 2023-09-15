import * as yup from 'yup';

export const albumValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  release_date: yup.date().required(),
  organization_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
