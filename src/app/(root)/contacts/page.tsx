'use client';

import React, { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/useApps';
import { useContacts } from '@/hooks/useContacts';
import { getAllContacts } from '@/redux/contacts/operations';

const ContactsPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, contacts } = useContacts();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <>
      <h1>ContactsPage</h1>
      <ul>
        {contacts?.map((contact) => (
          <li key={contact._id}>{contact.name}</li>
        ))}
      </ul>
    </>
  )
}

export default ContactsPage
