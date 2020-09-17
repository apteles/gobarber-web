import { createContext } from 'react';

type AuthContextApp = {
  name: string;
};

const AuthContext = createContext<AuthContextApp>({} as AuthContextApp);

export default AuthContext;
