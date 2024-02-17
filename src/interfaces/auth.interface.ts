export interface ILoginParams {
  username: string;
  password: string;
}

export interface IRegisterParams extends ILoginParams {
  email: string;
}

export interface ILoginResponse {
  isAdmin: boolean;
  token: string;
}
