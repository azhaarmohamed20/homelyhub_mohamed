import Image from 'next/image'
import styles from './page.module.css'
import { Box,Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box
      px={4} 
      py={2}
      w="95%"
      m="auto" 
      color="black"
      rounded="10px"
      fontFamily={"noto sans, sans-serif"}
    >
    <Text>Meine Seite</Text>
      
  </Box> 
  )
}
