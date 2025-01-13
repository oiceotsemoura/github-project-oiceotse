import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IGetUsersListByNameGitHubResponse} from '@interfaces/GitHub/IGetUsersListByNameGitHub';
import {IGitHubUserDetailed} from '@interfaces/GitHub/IGitHubUserDetailed';
import {IGitHubRepo} from '@interfaces/GitHub/IGitHubRepo';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.github.com'}),
  endpoints: builder => ({
    getUsersListByName: builder.query<
      IGetUsersListByNameGitHubResponse,
      string
    >({
      query: username => `search/users?q=${username}`,
    }),
    getUserByName: builder.query<IGitHubUserDetailed, string>({
      query: username => `users/${username}`,
    }),
    getReposByUserName: builder.query<IGitHubRepo[], string>({
      query: username => `users/${username}/repos`,
    }),
  }),
});

export const {
  useLazyGetUserByNameQuery,
  useLazyGetUsersListByNameQuery,
  useLazyGetReposByUserNameQuery,
} = githubApi;
