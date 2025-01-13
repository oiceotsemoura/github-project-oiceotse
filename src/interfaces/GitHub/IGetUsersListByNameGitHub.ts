export interface IUserGitHub {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

export interface IGetUsersListByNameGitHubResponse {
  total_count: number;
  incomplete_results: boolean;
  items: IUserGitHub[];
}
