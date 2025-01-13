import React, {useCallback} from 'react';
import {FlatList, Pressable} from 'react-native';
import {ActivityIndicator, Avatar} from 'react-native-paper';
import {useProfile} from '../hooks/useProfile';
import {IGitHubRepo} from '@interfaces/GitHub/IGitHubRepo';
import {
  BioText,
  EmailText,
  EmptyContentContainer,
  EmptyText,
  HeaderContainer,
  InformationsContainer,
  LoaderContainer,
  LocationEmailContainer,
  LocationText,
  NameText,
  ReposTitleText,
  StyledListItem,
  UserNameText,
} from './styles';
import {theme} from '@theme/index';

const Loader = () => (
  <LoaderContainer>
    <ActivityIndicator size={40} />
  </LoaderContainer>
);

export const Profile = () => {
  const {userIsloading, user, repos, reposIsloading, openURL, reposAmount} =
    useProfile();

  const renderItem = useCallback(
    ({item}: {item: IGitHubRepo}) => (
      <Pressable onPress={() => openURL(item.clone_url)}>
        <StyledListItem title={item.name} description={item.url} />
      </Pressable>
    ),
    [],
  );

  if (userIsloading) {
    return <Loader />;
  }

  const emptyContent = () => (
    <EmptyContentContainer>
      {reposIsloading ? (
        <ActivityIndicator
          size="large"
          color={theme.colors.BrandColors.Blue.main}
        />
      ) : (
        <EmptyText>Nenhum repositório disponível</EmptyText>
      )}
    </EmptyContentContainer>
  );

  const listHeader = () => (
    <HeaderContainer>
      <Avatar.Image size={100} source={{uri: user?.avatar_url}} />
      <NameText>{user?.name}</NameText>
      <UserNameText>{user?.login}</UserNameText>
      <LocationEmailContainer>
        <LocationText>{`Location: ${user?.location} | `}</LocationText>
        <EmailText>{` Email: ${user?.email}`}</EmailText>
      </LocationEmailContainer>
      <BioText>{user?.bio}</BioText>
      <InformationsContainer>
        <ReposTitleText>Repositórios: {reposAmount}</ReposTitleText>
        <ReposTitleText>Seguidores: {user?.followers}</ReposTitleText>
      </InformationsContainer>
    </HeaderContainer>
  );

  return (
    <FlatList
      contentContainerStyle={{padding: 10}}
      ListHeaderComponent={listHeader}
      style={{width: '100%'}}
      data={repos}
      keyExtractor={(item, index) => `repo${index}`}
      renderItem={renderItem}
      ListEmptyComponent={emptyContent}
    />
  );
};
