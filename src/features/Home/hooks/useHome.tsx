import {yupResolver} from '@hookform/resolvers/yup';

import {useForm} from 'react-hook-form';
import * as yup from 'yup';

import {useLazyGetUsersListByNameQuery} from '@services/github';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '@constants/routes';

interface SearchForm {
  search: string;
}

export function useHome() {
  const {navigate} = useNavigation();
  const [getUserListByName, {data, isLoading, isSuccess}] =
    useLazyGetUsersListByNameQuery();

  const schema = yup.object().shape({
    search: yup.string().required('Busca inválida'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver<SearchForm>(schema),
    mode: 'onSubmit',
  });

  const submit = async (formData: SearchForm) => {
    getUserListByName(formData.search);
  };

  const navigateToProfile = (username: string) => {
    navigate(Routes.PROFILE, {username});
  };

  const onSubmit = handleSubmit(submit);

  console.log(data);

  return {
    control,
    onSubmit,
    errors,
    users: data?.items,
    isLoading,
    isSuccess,
    navigateToProfile,
  };
}
