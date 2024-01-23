"use client"
import { Box, Image, Spacer, Stack, Text, HStack } from "@chakra-ui/react";

export default function Property({...props}) {
    let { property } = props

    return (
        
            <Box
                rounded="10px"
                bg={"#EDEDED"}
                m={"auto"}
                p={"10px"}
            >
            <Stack spacing={2}>
                <Image
                    src={property.image}
                    alt={property.name}
                    aspectRatio={"16/10"}
                    boxSize={"200px"}
                    rounded={"10px"}
                >
                </Image>
                <Text
                    fontWeight={"bold"}
                    fontFamily={"noto sans, sans-serif"}
                    mb={"auto"}
                >
                    {property.name}
                </Text>
                <Text
                    fontSize={"13px"}
                    fontFamily={"noto sans, sans-serif"}
                >
                    {property.description}
                </Text>
            </Stack>
           
            </Box>
        
    );
}