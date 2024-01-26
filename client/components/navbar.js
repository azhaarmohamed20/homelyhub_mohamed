"use client"
import { Text, Box, Link, Flex, Spacer, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import ProfileModal from "../components/ProfileModal";
import { useDisclosure } from '@chakra-ui/react';

export default function Navbar() {
  const token = localStorage.getItem('userInfo');

  const userData = JSON.parse(localStorage.getItem("userInfo"));

  
  return (
    <Box
      bg="#EDEDED"
      px={4}
      py={2}
      w="95%"
      m="auto"
      color="black"
      rounded="10px"
      fontFamily={"noto sans, sans-serif"}
      mt={"20px"}
    >
      <Flex alignItems="center">
        <Text fontSize="25px" fontWeight="bold" ml="20px" color="#235bcd">
          HomelyHub
        </Text>
        <Spacer />
        <Link as={NextLink} textDecoration={"none"} href="/" color="black" mr="40px" fontSize="20px" _hover={{ color: "black", opacity: 1 }} opacity={0.55}>
          Home
        </Link>
        <Link as={NextLink} textDecoration={"none"} href="/about" color="black" mr="40px" fontSize="20px" _hover={{ color: "black", opacity: 1 }} opacity={0.55}>
          About
        </Link>
        <Link as={NextLink} textDecoration={"none"} href="/contact" color="black" mr="40px" fontSize="20px" _hover={{ color: "black", opacity: 1 }} opacity={0.55}>
          Contact
        </Link>
        {token ? (
          <ProfileModal userData={userData}/>
        ) : (
          <>
            <Link as={NextLink} textDecoration={"none"} href="/register" color="black" mr="40px" fontSize="20px" _hover={{ color: "black", opacity: 1 }} opacity={0.55}>
              Register
            </Link>
            <Link as={NextLink} textDecoration={"none"} href="/login" color="black" mr="40px" fontSize="20px" _hover={{ color: "black", opacity: 1 }} opacity={0.55}>
              Login
            </Link>
          </>
        )}
      </Flex>
    </Box>
  );
}