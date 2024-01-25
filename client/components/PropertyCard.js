
import { Box, Image, Spacer, Stack, Text, HStack, Button } from "@chakra-ui/react";
import { useRouter } from 'next/router';
export default function Property({...props}) {
    let { property } = props



    const handlePropertyClick = (propertyId) => {
        window.location.href = `/property/${propertyId}`;
    };

    return (
        
            <Button
                rounded="10px"
                height={"auto"}
                variant={"outline"}
                paddingY={3}
                onClick={() => handlePropertyClick(property._id)}
            >
            <Stack spacing={0.5}>
                <Image
                    src={property.image}
                    alt={property.name}
                    objectFit={"cover"}
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
                    {property.short_description}
                </Text>
            </Stack>
           
            </Button>
        
    );
}