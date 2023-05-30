import { useState, createContext, useContext } from 'react';

const PageContext = createContext();

export const PageContextProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const value = {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
  };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export const usePageContext = () => {
  return useContext(PageContext);
};
