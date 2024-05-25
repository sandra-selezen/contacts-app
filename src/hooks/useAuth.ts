import { selectIsLoggedIn, selectIsRefreshing, selectUser } from "@/redux/auth/selectors";
import { useAppSelector } from "./useApps";

export const useAuth = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const user = useAppSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
