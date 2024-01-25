"use client"
import PropertyItem from "@/components/PropertyItem"
import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export default function Property(){

    const [propertyID, setPropertyID ]  = useState();
    const [properties, setProperties] = useState([])

    useEffect(() => {
        async function getPropertyIDFromURL() {
            await new Promise((resolve) => {
                setTimeout(resolve, 0); // Warten, um sicherzustellen, dass die URL vollständig geladen ist
            });
            const url = window.location.href;  
            const id = url.substring(url.lastIndexOf('/') + 1);  
            setPropertyID(id); 
        }
        getPropertyIDFromURL();
    }, []);
    

    useEffect(()=>{
        if(propertyID) {
            fetch(`http://localhost:5000/api/property/${propertyID}`)
            .then(res=>res.json())
            .then(data=>setProperties(data));
        }
    }, [propertyID])
    

    return (
        <Box>
             <PropertyItem key={propertyID} properties={properties}/>
        </Box>
    )
}