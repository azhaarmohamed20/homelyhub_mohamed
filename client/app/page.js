import Image from 'next/image'
import styles from './page.module.css'
import { Box,Text } from '@chakra-ui/react'
import PropertyList from '@/components/PropertyList'

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
      <Text textAlign={"center"} fontSize={"40px"} fontWeight={"bold"}>Wilkommen zu HomelyHub</Text>
      <Text textAlign={"center"} fontSize={"25px"} mb={"40px"}>Buchen sie ihr Luxus Traum Haus für die besten Preise.</Text>
      <PropertyList />
    </Box> 
  )
}
