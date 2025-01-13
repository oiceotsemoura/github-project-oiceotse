import React, {useCallback} from 'react';
import {Pressable} from 'react-native';

import {IconButton, ActivityIndicator, Avatar} from 'react-native-paper';
import {Controller} from 'react-hook-form';
import {useHome} from '../hooks/useHome';
import {IUserGitHub} from '@interfaces/GitHub/IGetUsersListByNameGitHub';

import {
  Container,
  EmptyContainer,
  EmptyText,
  ErrorText,
  StyledFlatList,
  StyledListItem,
  StyledSearchbar,
} from './styles';

export const Home = () => {
  const {control, errors, isLoading, users, onSubmit, navigateToProfile} =
    useHome();

  const renderSearchIcon = useCallback(
    () => <IconButton icon="send" onPress={onSubmit} />,
    [onSubmit],
  );

  const renderItem = useCallback(
    ({item}: {item: IUserGitHub}) => (
      <Pressable onPress={() => navigateToProfile(item.login)}>
        <StyledListItem
          title={item.login}
          left={() => (
            <Avatar.Image size={30} source={{uri: item.avatar_url}} />
          )}
        />
      </Pressable>
    ),
    [],
  );

  const emptyContent = () => (
    <EmptyContainer>
      {isLoading ? (
        <ActivityIndicator animating size="large" />
      ) : (
        <EmptyText>Nenhum item disponível</EmptyText>
      )}
    </EmptyContainer>
  );

  return (
    <Container>
      <Controller
        name="search"
        control={control}
        defaultValue=""
        render={({field: {onChange, value}}) => (
          <>
            <StyledSearchbar
              placeholder="Digite o nome do usuário"
              onChangeText={onChange}
              value={value}
              right={renderSearchIcon}
              onSubmitEditing={onSubmit}
            />
            {errors.search && <ErrorText>{errors.search.message}</ErrorText>}
          </>
        )}
      />
      <StyledFlatList
        data={users}
        keyExtractor={(_item: any, index: number) => `user${index}`}
        renderItem={renderItem}
        ListEmptyComponent={emptyContent}
      />
    </Container>
  );
};
