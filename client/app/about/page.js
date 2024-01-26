import { Box, Text } from "@chakra-ui/react";

export default function About(){
    return (
        <Box
            fontSize={"20px"}
            textAlign={"center"}
            w={"80%"}
            justifyContent={"center"}
            m={"auto"}
        >
            <Text
            fontSize={"30px"}
            fontWeight={"bold"}
            mt={"20px"}
            mb={"20px"}
            >Willkommen bei HomelyHub - Ihrem Tor zu exklusivem Luxuswohnen</Text>
            <Text textAlign={"left"}>Hallo, ich bin Azhaar, die Gründerin von HomelyHub. Auf unserer Plattform bieten wir sorgfältig ausgewählte Luxusvillen für unvergessliche Aufenthalte weltweit. Jede Villa erfüllt höchste Standards in Design, Ausstattung und Lage.</Text>
            <br />
            <Text textAlign={"left"}>Egal, ob Sie einen Rückzugsort am See, einen Stadtpalast mit Panoramablick oder ein charmantes Landhaus suchen – HomelyHub präsentiert erstklassige Unterkünfte, die Luxus und Komfort vereinen.</Text>
            <br />
            <Text  textAlign={"left"}mb={"50px"}>Unser engagiertes Team steht Ihnen jederzeit zur Verfügung, um sicherzustellen, dass Ihr Aufenthalt reibungslos verläuft. Treten Sie ein in die Welt von HomelyHub und erleben Sie Luxus, der mehr als ein Versprechen ist – er ist ein unvergessliches Erlebnis.</Text>
        </Box>
    )
}