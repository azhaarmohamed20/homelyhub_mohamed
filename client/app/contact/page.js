import { AspectRatio, Box, Link, Text } from "@chakra-ui/react";

export default function Contact(){
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
            >HomelyHub - Ihrem Tor zu exklusivem Luxuswohnen</Text>
            <Text textAlign={"left"} mb={"40px"}>
                Fragen? Kontaktiere Sie uns unter<Link color='blue.300' listStyleType={"underline"} href="mailto:azhaar.mohamed@stud.kbw.ch">   azhaar.mohamed@stud.kbw.ch
                </Link> 
            </Text>
            <br />
            <Box
                justifyContent={"center"}
                w={"80%"}
                m={"auto"}
                
            >
                <AspectRatio ratio={16 / 9} mb={"40px"}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.718381856217!2d8.727989376642658!3d47.49539929564953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a999e9fc4c32d%3A0xc5f240ca8689ae56!2sKantonsschule%20B%C3%BCelrain%20Winterthur%2C%20Wirtschaftsgymnasium%2C%20Handels-%20und%20Informatikmittelschule!5e0!3m2!1sde!2sch!4v1701883710994!5m2!1sde!2sch&t=k&z=20"
                    
                    ></iframe>
                </AspectRatio>
                
            </Box>
        </Box>
    )
}