import { instance } from './index';

interface UserInfo {
  email: string;
  password: string;
}

interface Response {
  message: string;
  token: string;
}

const authApi = {
  signUp: async (userInfo: UserInfo): Promise<Response> => {
    const { data } = await instance.post('/users/create', userInfo);
    return data;
  },

  signIn: async (userInfo: UserInfo): Promise<Response> => {
    const { data } = await instance.post('/users/login', userInfo);
    return data;
  },
};

export default authApi;
