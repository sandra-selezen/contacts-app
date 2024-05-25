import { selectContacts, selectError, selectIsLoading } from "@/redux/contacts/selectors";
import { useAppSelector } from "./useApps";

export const useContacts = () => {
  const isLoading = useAppSelector(selectIsLoading);
  const contacts = useAppSelector(selectContacts);
  const error = useAppSelector(selectError);

  return {
    isLoading,
    contacts,
    error,
  }
}
