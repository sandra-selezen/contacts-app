export interface ISignedUser {
  name: string;
  email: string;
  token: string | null;
}

export interface ILoggedUser {
  name: string;
  email: string;
  token: string;
}

export interface IContact {
  _id: string;
  name: string;
  phone: string;
  favorite: boolean;
}

export interface IApiError {
  statusCode: number;
  message: string;
}
