import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';

type User = {
  id: number;
  name: string;
  email: string;
};

type Tokens = {
  accessToken: string;
};

type State = {
  isAuth: boolean;
  user: null | User;
  tokens: null | Tokens;
};

const useSessionStore = create(
  persist(
    immer<State>(() => ({
      user: null,
      tokens: null,
      isAuth: false,
    })),
    {
      name: 'session',
    }
  )
);

const selectors = {
  useIsAuth: () => useSessionStore((state) => state.isAuth),
};

const actions = {
  login: () => {
    const set = useSessionStore.setState;

    set((state) => {
      state.isAuth = true;
    });
  },
  logout: () => {
    const set = useSessionStore.setState;

    set((state) => {
      state.isAuth = false;
    });
  },
};

export const session = {
  actions,
  selectors,
};
