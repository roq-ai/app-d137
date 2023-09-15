import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createAlbumSong } from 'apiSdk/album-songs';
import { albumSongValidationSchema } from 'validationSchema/album-songs';
import { AlbumInterface } from 'interfaces/album';
import { SongInterface } from 'interfaces/song';
import { getAlbums } from 'apiSdk/albums';
import { getSongs } from 'apiSdk/songs';
import { AlbumSongInterface } from 'interfaces/album-song';

function AlbumSongCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: AlbumSongInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createAlbumSong(values);
      resetForm();
      router.push('/album-songs');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<AlbumSongInterface>({
    initialValues: {
      album_id: (router.query.album_id as string) ?? null,
      song_id: (router.query.song_id as string) ?? null,
    },
    validationSchema: albumSongValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Album Songs',
              link: '/album-songs',
            },
            {
              label: 'Create Album Song',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Album Song
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <AsyncSelect<AlbumInterface>
            formik={formik}
            name={'album_id'}
            label={'Select Album'}
            placeholder={'Select Album'}
            fetcher={getAlbums}
            labelField={'name'}
          />
          <AsyncSelect<SongInterface>
            formik={formik}
            name={'song_id'}
            label={'Select Song'}
            placeholder={'Select Song'}
            fetcher={getSongs}
            labelField={'title'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/album-songs')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'album_song',
    operation: AccessOperationEnum.CREATE,
  }),
)(AlbumSongCreatePage);
