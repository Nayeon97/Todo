import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const loginState = atom<boolean>({
  key: 'loginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const editState = atom<boolean>({
  key: 'editState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
