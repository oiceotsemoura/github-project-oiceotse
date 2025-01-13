import styled from 'styled-components/native';
import {Searchbar, Text, List} from 'react-native-paper';
import {FlatList} from 'react-native';
import {theme} from '@theme/index';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing.SM}px;
  background-color: ${theme.colors.BrandColors.GrayScale.white};
`;

export const StyledSearchbar = styled(Searchbar)`
  margin-bottom: 10px;
  width: 100%;
`;

export const ErrorText = styled(Text)`
  color: ${theme.colors.FeedbackColors.error};
`;

export const StyledFlatList = styled(FlatList)`
  width: 100%;
`;

export const StyledListItem = styled(List.Item)`
  width: 100%;
  border-bottom-width: 0.5px;
  border-color: ${theme.colors.BrandColors.GrayScale.dark};
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing.MD}px;
`;

export const EmptyText = styled(Text)`
  color: ${theme.colors.BrandColors.GrayScale.black};
`;
