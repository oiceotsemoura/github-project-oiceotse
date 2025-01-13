export enum Routes {
  HOME = 'HOME',
  PROFILE = 'PROFILE',
}

export type RootStackParamList = {
  [Routes.HOME]: undefined;
  [Routes.PROFILE]: {username: string};
};
