"use client"
import { Box, Image, Text, Tooltip , Tag, HStack, Spacer, chakra} from "@chakra-ui/react"
import { ChevronLeftIcon, MoonIcon } from "@chakra-ui/icons"
import { Link } from "@chakra-ui/react"
import NextLink from "next/link"

export default function PropertyItem({ properties}){

    console.log(properties)
    function splitTextIntoParagraphs(text, linesPerParagraph) {
        if (!text) {
            return [];
        }
        
        const paragraphs = [];
        let tempParagraph = '';
        const sentences = text.split('.'); // Splitte den Text an jedem Punkt
        for (let i = 1; i < sentences.length; i++) {
            tempParagraph += sentences[i].trim() + '.'; // Fügt die Satz mit einem Punkt hinzu
            if ((i+1) % linesPerParagraph === 0 || i === sentences.length - 1) {
                paragraphs.push(tempParagraph.trim()); // Fügt den Absatz hinzu und entfernt zusätzliche Leerzeichen
                tempParagraph = '';
            } else {
                tempParagraph += '\n'; // Fügt einen Zeilenumbruch nach jedem Punkt hinzu
            }
        }
        return paragraphs;
    }
    
    const text = properties.long_description;    
    const linesPerParagraph = 5;
    const shouldSplitText = text && text.length > 100; // Beispiel: Text wird nur geteilt, wenn er länger als 100 Zeichen ist

    const paragraphs = shouldSplitText ? splitTextIntoParagraphs(text, linesPerParagraph) : [text];

    const price = properties.price ? properties.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'") : '';

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
            <HStack spacing={"24px"} w={"100%"}>
                <Link 
                    as={NextLink}
                    href="/"
                    textDecoration={"none"}
                    color="black"
                    fontSize="50px"
                    justifyContent={"left"}
                >
                    <ChevronLeftIcon color={"black"} />
                </Link>

                <Text
                    fontWeight={"bold"}
                    fontSize="40px"
                    textAlign={"center"}
                >
                    {properties.name}
                </Text>
            </HStack>
            

            <Image
                src={properties.image}
                alt={properties.name}
                
                boxSize={"500px"}
                rounded={"10px"}
                display={"block"} 
                margin={"auto"}
                pb={"50px"}
            />
            
            <HStack spacing={10} justify={"center"} gap={"50px"} width={"100%"} overflowX={"auto"}>
                <Tooltip label={"price"} >
                        <Tag bg={"#EDEDED"} rounded={"5px"} fontSize={"30px"}>
                            <MoonIcon mr={"10px"} /> Pro Nacht {price} $
                    
                        </Tag>
                </Tooltip>
                <Tooltip label={"rooms"}>
                    <Tag fontSize={"30px"} bg={"#EDEDED"} rounded={"5px"}> {properties.number_of_rooms} Zimmer</Tag>
                </Tooltip>
            </HStack>
            

            <Text 
                display={"block"}
                textAlign={"center"} 
                marginLeft={"auto"}
                marginRight={"auto"}
                width={"80%"}  
                fontSize={"28px"}
                fontWeight={"bold"}
                fontFamily={"noto sans, sans-serif"}
            >
                    Kurz Beschreibung
            </Text>

            {paragraphs.map((paragraph, index) => (
                <Text
                display={"block"}
                textAlign={"left"} 
                marginLeft={"auto"}
                marginRight={"auto"}
                width={"80%"}
                fontSize={"25px"}
                key={index}
                fontFamily={"noto sans, sans-serif"}
                >
                    {paragraph}
                </Text>
            ))}
            
        </Box>
    )
}