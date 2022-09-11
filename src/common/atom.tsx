import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const editState = atom<boolean>({
  key: 'editState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
