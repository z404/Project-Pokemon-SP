import { createContext, useContext } from 'react';

export type UserContextType = {
    username: string;
    setUsername: (string: string) => void;
}

export const UserContext = createContext<UserContextType>({ username: "err", setUsername: _ => console.warn('no username provider')});
export const useTheme = () => useContext(UserContext);