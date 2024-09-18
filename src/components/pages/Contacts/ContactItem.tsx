'use client';

import React from 'react';
import { Avatar, Box, Flex, IconButton, Text, useDisclosure } from '@chakra-ui/react';
import { RiDeleteBin5Line, RiHeart3Line, RiPencilLine } from '@remixicon/react';
import { useAppDispatch } from '@/hooks/useApps';
import { deleteContact, toggleFavorite } from '@/redux/contacts/operations';
import { IContact } from '@/types/store';
import { ActionPopover } from '@/components/ui/popover/ActionPopover';
import { ContactModal } from '@/components/ui/modals/ContactModal';
import { UpdateContact } from '@/components/forms/UpdateContact/UpdateContact';

interface IContactItemProps {
  contact: IContact;
}

export const ContactItem = ({ contact }: IContactItemProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();

  const onToggleFavorite = async (contactId: string) => {
    await dispatch(toggleFavorite(contactId)).unwrap();
  };

  const onDeleteContact = async (contactId: string) => {
    await dispatch(deleteContact(contactId)).unwrap();
  };

  return (
    <>
      <Box border='1px' borderColor='light.700' borderRadius="md" padding={4} as='li'>
        <Flex gap="0.5rem">
          <Avatar name={contact.name} src={contact.name} size={"md"} />
          <Box ml='3'>
            <Text fontWeight='bold'>
              {contact.name}
            </Text>
            <Text fontSize='sm'>{contact.phone}</Text>
          </Box>
          <ActionPopover>
            <Box display="flex" gap="0.5rem">
              <IconButton
                title={contact.favorite ? 'Remove from favorite' : 'Add to favorites'}
                aria-label={contact.favorite ? 'Remove from favorite' : 'Add to favorites'}
                backgroundColor={"transparent"}
                color={"inherit"}
                fontSize={"20px"}
                _hover={{
                  backgroundColor: "dark.700"
                }}
                icon={<RiHeart3Line size="1.5rem" />}
                onClick={() => onToggleFavorite(contact._id)}
              />
              <IconButton
                title={'Edit contact'}
                aria-label={'Edit contact'}
                backgroundColor={"transparent"}
                color={"inherit"}
                fontSize={"20px"}
                _hover={{
                  backgroundColor: "dark.700"
                }}
                icon={<RiPencilLine size="1.5rem" />}
                onClick={onOpen}
              />
              <IconButton
                title={'Delete contsct'}
                aria-label={'Delete contsct'}
                backgroundColor={"transparent"}
                color={"inherit"}
                fontSize={"20px"}
                _hover={{
                  backgroundColor: "dark.700"
                }}
                icon={<RiDeleteBin5Line size="1.5rem" />}
                onClick={() => onDeleteContact(contact._id)}
              />
            </Box>
          </ActionPopover>
        </Flex>
      </Box>

      <ContactModal isOpen={isOpen} onClose={onClose} title={'Edit contact'}>
        <UpdateContact contact={contact} onClose={onClose} />
      </ContactModal>
    </>
  )
}
