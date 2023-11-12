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

export interface IContact {
  _id: string;
  name: string;
  phone: string;
  favorite: boolean;
}

export interface IContactsState {
  items: IContact[];
  isLoading: boolean;
  error: string | null;
}