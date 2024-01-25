"use client"

import { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

export default function CheckoutModal({ selectedProperty, numberOfNights, totalPrice }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckout = () => {
    // Implement your checkout logic here
    console.log(`Checking out ${selectedProperty} for ${numberOfNights} nights`);
    setIsOpen(false);
  };

  return (
    <>
      <Button 
        onClick={() => setIsOpen(true)}
        display={"flex"}
        justifyContent={"center"}
        m={"auto"}
        mt={"20px"}
        mb={"20px"}
      >
        Checkout
        </Button>
      <Modal size="xl" isCentered isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay/>
        <ModalContent 
            
        >
          <ModalHeader
            textAlign={"center"}
          >
            Checkout
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            d="flex"
            alignItems={"center"}
            justifyContent={"space-between"}
          >

            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                    <Tr>
                        <Th>Property</Th>
                        <Th>Number of Nights</Th>
                        <Th>Total Price</Th>
                        
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>{selectedProperty}</Td>
                        <Td>{numberOfNights}</Td>
                        <Td fontWeight={"bold"}>{totalPrice}$</Td>
                    </Tr>
                    </Tbody>
                </Table>
                </TableContainer>


            
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCheckout}>
              Checkout
            </Button>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}