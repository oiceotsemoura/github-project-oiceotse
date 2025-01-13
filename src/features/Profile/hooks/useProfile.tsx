import {RootStackParamList, Routes} from '@constants/routes';
import {RouteProp, useRoute} from '@react-navigation/native';
import {
  useLazyGetUserByNameQuery,
  useLazyGetReposByUserNameQuery,
} from '@services/github';
import {useEffect, useMemo} from 'react';
import {Alert, Linking} from 'react-native';

export function useProfile() {
  const {username} =
    useRoute<RouteProp<RootStackParamList, Routes.PROFILE>>().params;

  const [
    getUserByName,
    {data: userData, isLoading: userIsloading, isSuccess: userIsSuccess},
  ] = useLazyGetUserByNameQuery();

  const [
    getReposbyUserName,
    {data: reposData, isLoading: reposIsloading, isSuccess: reposIsSuccess},
  ] = useLazyGetReposByUserNameQuery();

  useEffect(() => {
    getUserByName(username);
  }, []);

  useEffect(() => {
    if (userIsSuccess) {
      getReposbyUserName(username);
    }
  }, [userIsSuccess]);

  const openURL = async (url: string) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Não foi possível abrir o link: ${url}`);
    }
  };

  const reposAmount = useMemo(
    () => reposData?.length || 0,
    [reposData?.length],
  );
  console.log('repoo', reposData);
  return {
    user: userData,
    userIsloading,
    userIsSuccess,
    repos: reposData,
    reposIsloading,
    reposIsSuccess,
    openURL,
    reposAmount,
  };
}
