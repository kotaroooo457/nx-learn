import { Header } from '../Layout/Header';

export const AuthHeader = () => {
  const signOut = () => {
    console.log('signPut');
  };
  return <Header signOutClick={signOut} />;
};
