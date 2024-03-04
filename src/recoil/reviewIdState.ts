import { atom } from 'recoil';

export const reviewIdState = atom<number[]>({
  key: 'reviewIdState',
  default: [],
});
