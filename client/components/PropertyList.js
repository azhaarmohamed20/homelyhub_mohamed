"use client"
import { useEffect, useState } from "react"
import PropertyCard from "./PropertyCard";
import { HStack, Spacer, Flex } from "@chakra-ui/react";

export default function PropertyList(){
    const [properties, setProperties] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/api/property")
        .then(res=>res.json())
        .then(data=>setProperties(data));
    }, [])



    return (
        <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={"20px"}
    >
        {properties.map(property => (
            <PropertyCard key={property._id} property={property} />
        ))}
    </Flex>
    )
}