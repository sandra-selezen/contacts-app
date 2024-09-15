import React from 'react';
import { IconButton, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverTrigger, Portal } from '@chakra-ui/react';
import { RiMore2Line } from '@remixicon/react';

interface IActionPopoverProps {
  children: React.ReactNode;
}

export const ActionPopover = ({ children }: IActionPopoverProps) => {
  return (
    <Popover variant="dark">
      <PopoverTrigger>
        <IconButton
          aria-label={''}
          backgroundColor={"transparent"}
          color={"inherit"}
          fontSize={"20px"}
          marginLeft={"auto"}
          _hover={{
            backgroundColor: "light.700"
          }}
          icon={<RiMore2Line size="1.5rem" />}
        />
      </PopoverTrigger>
      <Portal>
        <PopoverContent w="14rem">
          <PopoverArrow bg="light.700" />
          <PopoverCloseButton />
          <PopoverBody>
            {children}
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}
