'use client';

import React, { useEffect } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { useAppDispatch } from '@/hooks/useApps';
import { useContacts } from '@/hooks/useContacts';
import { getAllContacts } from '@/redux/contacts/operations';
import { IContact } from '@/types/api-data';
import { ContactItem } from './ContactItem';

export const ContactList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, contacts } = useContacts();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={3} as="ul">
      {contacts?.map((contact) => (
        <ContactItem key={contact._id} contact={contact} />
      ))}
    </SimpleGrid>
  )
}
