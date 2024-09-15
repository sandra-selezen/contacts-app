'use client';

import React from 'react';
import { Avatar, Badge, Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { RiDeleteBin5Line, RiHeart3Line, RiPencilLine } from '@remixicon/react';
import { IContact } from '@/types/store';
import { ActionPopover } from '@/components/ui/popover/ActionPopover';

interface IContactItemProps {
  contact: IContact;
}

export const ContactItem = ({ contact }: IContactItemProps) => {
  console.log("contact", contact);
  return (
    <>
      <Box border='1px' borderColor='light.700' borderRadius="md" padding={4} as='li'>
        <Flex gap="0.5rem">
          <Avatar name={contact.name} src={contact.name} size={"md"} />
          <Box ml='3'>
            <Text fontWeight='bold'>
              {contact.name}
              <Badge ml='1' colorScheme='green'>
                New
              </Badge>
            </Text>
            <Text fontSize='sm'>{contact.phone}</Text>
          </Box>
          <ActionPopover>
            <Box display="flex" gap="0.5rem">
              <IconButton
                aria-label={''}
                backgroundColor={"transparent"}
                color={"inherit"}
                fontSize={"20px"}
                _hover={{
                  backgroundColor: "dark.700"
                }}
                icon={<RiHeart3Line size="1.5rem" />}
              />
              <IconButton
                aria-label={''}
                backgroundColor={"transparent"}
                color={"inherit"}
                fontSize={"20px"}
                _hover={{
                  backgroundColor: "dark.700"
                }}
                icon={<RiPencilLine size="1.5rem" />}
              />
              <IconButton
                aria-label={''}
                backgroundColor={"transparent"}
                color={"inherit"}
                fontSize={"20px"}
                _hover={{
                  backgroundColor: "dark.700"
                }}
                icon={<RiDeleteBin5Line size="1.5rem" />}
              />
            </Box>
          </ActionPopover>
        </Flex>
      </Box>
    </>
  )
}
