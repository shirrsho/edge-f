'use client'
import React from 'react'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    ChakraProvider
  } from '@chakra-ui/react'

function ModalFactory({ modal }) {
    
    const {isOpen, onOpen, onClose} = useDisclosure()
    return (
      <ChakraProvider>
        <button className='absolute top-0 right-0' onClick={onOpen}>Open Modal</button>
  
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent className='min-w-fit min-h-fit'>
            <ModalHeader>{modal.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              {modal.content}
            </ModalBody>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    )
}

export default ModalFactory