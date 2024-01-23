"use client"
import { useEffect, useState } from "react"
import Property from "./Property";
import { HStack } from "@chakra-ui/react";

export default function PropertyList(){
    const [properties, setProperties] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/api/property")
        .then(res=>res.json())
        .then(data=>setProperties(data));
    }, [])



    return (
        <HStack spacing={"24px"}>
            {properties.map(property => (
                <Property key={property._id} property={property} />
            ))}
        </HStack>
    )
}