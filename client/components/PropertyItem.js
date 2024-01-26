"use client"
import { Box, Image, Text, Tooltip , Tag, HStack, Spacer, chakra, Button} from "@chakra-ui/react"
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, MoonIcon } from "@chakra-ui/icons"
import { Link } from "@chakra-ui/react"
import NextLink from "next/link"
import { useState } from "react"
import CheckoutModal from "./CheckoutModal"
import { useEffect } from "react"

export default function PropertyItem({ properties}){

    const [counter, setCounter] = useState(1)

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Überprüfen, ob der Benutzer eingeloggt ist, basierend auf dem Token im Local Storage
        const token = localStorage.getItem("userInfo");
        setIsLoggedIn(!!token); // Setzt isLoggedIn auf true, wenn ein Token vorhanden ist
    }, []);

    function increaseCounter(){
        setCounter(prevCounter => prevCounter + 1)
    }
    
    function decreaseCounter(){
        setCounter(prevCounter => prevCounter > 1 ? prevCounter - 1 : 1)
    }

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
            
            {/* //https://www.penthouses-zuerich.ch/img/projekt1.jpg?v=2
                https://www.villeinitalia.com/images/Villa_Rubini_WEB/de/Dongo_Comer-See_Lombardei-und-Comer-See_Villa_Rubini_index_001_1684994721.jpg
                https://www.luxhaus.de/fileadmin/_processed_/9/a/csm_T_Glasfassade_beim_Einfamilienhaus_Flachdach_132_luxhaus_85cc27e141.jpg
            */}

            <Image
                src={properties.image}
                alt={properties.name}
                objectFit={"cover"}
                boxSize={"500px"}
                rounded={"10px"}
                display={"block"} 
                margin={"auto"}
                pb={"50px"}
            />
            
            <HStack spacing={10} justify={"center"} gap={"50px"} width={"100%"} overflowX={"auto"} maxHeight={"auto"}>
                <Tooltip label={"price"} >
                        <Tag bg={"#EDEDED"} rounded={"5px"} fontSize={"30px"}>
                            <MoonIcon mr={"10px"} /> Pro Nacht {price} $
                    
                        </Tag>
                </Tooltip>
                <Tooltip label={"rooms"}>
                    <Tag fontSize={"30px"} bg={"#EDEDED"} rounded={"5px"}> {properties.number_of_rooms} Zimmer</Tag>
                </Tooltip>
            </HStack>
            <Spacer />
            <Text pt={"20px"} textAlign={"center"} m={"5px"} fontSize={"18pxs"}>Anzahl Nächte</Text>
            <HStack spacing={10} justify={"center"} gap={"50px"} width={"100%"} overflowX={"auto"}k>
                <Button border={"none"} bg={"white"} onClick={() => decreaseCounter(counter)}>
                    <ArrowLeftIcon boxSize={"25px"}/>
                </Button>
                
                <Text fontSize={"25px"} m={0}>{counter}</Text>
                <Button border={"none"} bg={"white"} onClick={() => increaseCounter(counter)}>
                    <ArrowRightIcon boxSize={"25px"}/>
                </Button>   
            </HStack>
            
            {isLoggedIn ? (
                <CheckoutModal
                selectedProperty={properties}
                numberOfNights={counter}
                totalPrice={properties.price * counter}
                just
                />
            ) : (
                <Text
                fontSize={"40px"}
                color='red.500'
                textAlign={"center"}
                mt={"40px"}
                mb={"40px"}
                >Bitte einloggen, so kann die Zahlung stattfinden</Text>
            )}


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
                    Beschreibung
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