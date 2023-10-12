import { client } from '.';

export type SignUpType = {
  nickname: string;
  email: string;
  password: string;
  passwordCheck: string;
  file: File | null;
};

export type LoginType = {
  email: string;
  password: string;
};

const USER_URL = '/api/user';

export async function signUp(payload: FormData) {
  const response = await client.post(`${USER_URL}/signup`, payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
}

export async function logIn(payload: LoginType) {
  const response = await client.post(`${USER_URL}/login`, payload);
  return response;
}
