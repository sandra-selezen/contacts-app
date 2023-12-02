import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

interface IContactModal {
  isOpen: boolean,
  onClose: () => void, 
  title: string, 
  children: React.ReactNode
}

export const ContactModal = ({ isOpen, onClose, title, children }: IContactModal) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} variant={'dark'}>
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {children}
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}
