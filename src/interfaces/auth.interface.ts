export interface ILoginParams {
  username: string;
  password: string;
}

export interface IRegisterParams extends ILoginParams {
  email: string;
}

export interface IAuthResponse {
  isAdmin: boolean;
  token: string;
  details: {
    id: string;
    email: string;
    username: string;
  };
}
