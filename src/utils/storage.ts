type User = {
  id: number;
  name: string;
};

const STORAGE_PREFIX = 'project_name';

export const storage = {
  getToken: () => {
    const token = localStorage.getItem(`${STORAGE_PREFIX}token`);
    return token;
  },
  setToken: (token: string) => {
    localStorage.setItem(`${STORAGE_PREFIX}token`, token);
  },
  setUser: (user: User) => {
    localStorage.setItem(`${STORAGE_PREFIX}user`, JSON.stringify(user));
  },
  getUser: () => {
    const user = localStorage.getItem(`${STORAGE_PREFIX}user`);
    if (!user) return undefined;
    return JSON.parse(user) as User;
  },
  clearAuthData: () => {
    localStorage.removeItem(`${STORAGE_PREFIX}token`);
    localStorage.removeItem(`${STORAGE_PREFIX}user`);
  },
  setRememberMe: (shouldRemeber: boolean) => {
    localStorage.setItem(`${STORAGE_PREFIX}remember_me`, `${shouldRemeber}`);
  },
  getRememberMe: () => {
    const shouldRemeber = localStorage.getItem(`${STORAGE_PREFIX}remember_me`);
    if (!shouldRemeber) return false;
    return JSON.parse(shouldRemeber) as boolean;
  },
};
