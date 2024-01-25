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

  const items = [
    { id: selectedProperty.stripe_id, quantity: numberOfNights }
  ];
  const handleCheckout = async () => {
    // Implement your checkout logic here
    const response = await fetch("http://localhost:5000/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: items
      })
    });
    const data = await response.json();
    if (data.url) {
      window.location.assign(data.url); // Redirect to Stripe Checkout
    }
    setIsOpen(false);
  }


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
                        <Td>{selectedProperty.name}</Td>
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