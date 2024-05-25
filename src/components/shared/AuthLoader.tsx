import { useEffect } from 'react';
import { refreshUser } from '@/redux/auth/operations';
import { useAppDispatch } from '@/hooks/useApps';

const AuthLoader = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthLoader;
