import { createContext, SetStateAction } from 'react';

const authState = createContext({
	authenticated: false,
	setAuthenticated: (auth: SetStateAction<boolean>) => {},
});

export default authState;
