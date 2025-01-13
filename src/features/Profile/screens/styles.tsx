import styled from 'styled-components/native';
import {List} from 'react-native-paper';
import {theme} from '@theme/index';

export const LoaderContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const EmptyContentContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const EmptyText = styled.Text`
  text-align: center;
  margin-top: 20px;
  font-size: ${theme.spacing.SM};
  color: ${theme.colors.BrandColors.GrayScale.dark};
`;

export const HeaderContainer = styled.View`
  align-items: center;
`;

export const NameText = styled.Text`
  font-size: ${theme.size.LG};
  color: ${theme.colors.BrandColors.GrayScale.black};
`;

export const UserNameText = styled.Text`
  color: ${theme.colors.BrandColors.GrayScale.dark};
`;

export const LocationEmailContainer = styled.View`
  flex-direction: row;
`;

export const LocationText = styled.Text`
  color: ${theme.colors.BrandColors.GrayScale.dark};
`;

export const EmailText = styled.Text`
  color: ${theme.colors.BrandColors.GrayScale.dark};
`;

export const BioText = styled.Text`
  color: ${theme.colors.BrandColors.GrayScale.dark};
`;

export const ReposTitleText = styled.Text`
  font-size: ${theme.size.SM}px;
  margin-top: 20px;
`;

export const FollowersTitleText = styled.Text`
  font-size: ${theme.size.SM}px;
  margin-top: 20px;
`;

export const InformationsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  padding-left: ${theme.spacing.MD}px;
  padding-right: ${theme.spacing.MD}px;
`;

export const StyledListItem = styled(List.Item)`
  width: 100%;
  border-bottom-width: 0.5px;
  border-color: ${theme.colors.BrandColors.GrayScale.dark};
  padding-top: ${theme.spacing.SM}px;
  padding-bottom: ${theme.spacing.SM}px;
`;
