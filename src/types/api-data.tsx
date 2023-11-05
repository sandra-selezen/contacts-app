export interface ISignedUser {
  name: string;
  email: string;
}

export interface ILoggedUser {
  token: string;
}

export interface IContact {
  _id: string;
  name: string;
  phone: string;
  favorite: boolean;
}
