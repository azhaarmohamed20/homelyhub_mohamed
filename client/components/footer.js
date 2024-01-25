import { Box, Text } from "@chakra-ui/react"
export default function Footer(){
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
          >
            <Text
              fontSize="15px"
              ml="20px"
            >
              © 2022 HomelyHub. All rights reserved. [Imprint and Privacy]
            </Text>
          </Box>      
    )
}