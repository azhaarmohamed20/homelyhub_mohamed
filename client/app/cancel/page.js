"use client"
import { Box, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link"
import { ChevronLeftIcon } from "@chakra-ui/icons"

export default function Cancel(){
    return(
        <Box
        w={"80%"}
        m={"auto"}
        >
            <Link 
                    as={NextLink}
                    href="/"
                    textDecoration={"none"}
                    color="black"
                    fontSize="20px"
                    justifyContent={"left"}
                >
                    <ChevronLeftIcon color={"black"} />
                    Zurück zur Homepage
                </Link>

            <Text
                fontFamily={"noto sans, sans-serif"}
                fontSize={"50px"}
                textAlign={"center"}
                color={"red.500"}
            >
                Die Zahlung wurde abgebrochen.
            </Text>
        </Box>
    )
}