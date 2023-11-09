export interface IUser {
  name: string;
  email: string;
}

export interface IAuthState {
  user: IUser;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: string | null;
  token: string | null;
}