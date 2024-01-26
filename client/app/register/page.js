"use client"
import { Box, Text, Input, Button, FormControl, FormLabel, HStack, useToast, Textarea, Image, Center, Heading, Flex, Spacer } from "@chakra-ui/react";
import {chakra} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from 'react';


export default function Registration(){

    
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmpassword, setConfirmpassword] = useState()
    const [pic, setPic] = useState()
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('')
    

    const handleClick = () => setShowPassword(!showPassword)

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        setPic(file);
      };
      
      async function registerUser(event) {
        event.preventDefault();
        if (!name || !email || !password || !confirmpassword) {
          setErrorMessage('Please enter all fields');
          setLoading(false);
          return;
        }
        if (password !== confirmpassword) {
          setErrorMessage('Passwords do not match');
          setLoading(false);
          return;
        }
        try {
            const User2 = {
              name: name,
              email: email,
              password: password
            };
          
            const response = await fetch('http://localhost:5000/api/user', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(User2)
            });
          
      
          const data = await response.json();
          localStorage.setItem("userInfo", JSON.stringify(data));
      
          console.log('Registration Successful:', data);
          
          // Reset form fields
          setName('');
          setEmail('');
          setPassword('');
          window.location.href = '/';
        } catch (error) {
          console.error('Error Occurred:', error.message);
        }
      }

      return (
        <Flex minH="100vh" flexDirection="column" alignItems="center" p={10} bg="sky.200">
          <Flex textAlign="center" bg="white" w="100%" h="100px" rounded="lg" borderWidth="1px">
            <Heading mt="40px" mb="15px" fontWeight="bold">HomelyHub</Heading>
          </Flex>
          <Spacer />
          <Flex flexDir="column" p={10} bg="white" w="100%" h="100%" rounded="lg" borderWidth="1px">
      
            <chakra.form onSubmit={registerUser}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input 
                  border="2px solid black" 
                  placeholder='Enter your name'
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </FormControl>
      
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input 
                  border="2px solid black" 
                  placeholder='Enter your email'
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormControl>
      
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input 
                  border="2px solid black" 
                  placeholder='Enter your Password'
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? 'text' : 'password'}
                  required
                />
                <Button 
                  bg="gray.300" 
                  _hover={{ bg: "gray.400" }}
                  rounded="sm" 
                  px="2" 
                  py="1" 
                  fontSize="sm" 
                  cursor="pointer" 
                  onClick={handleClick}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </FormControl>
              <br></br>
      
              <FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <Input 
                  border="2px solid black" 
                  placeholder='Confirm your Password'
                  onChange={(e) => setConfirmpassword(e.target.value)}
                  type={showPassword ? 'text' : 'password'}
                  required
                />
                <Button 
                  bg="gray.300" 
                  _hover={{ bg: "gray.400" }}
                  rounded="sm" 
                  px="2" 
                  py="1" 
                  fontSize="sm" 
                  cursor="pointer" 
                  onClick={handleClick}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </FormControl>
              <br></br>
      
              <Button 
                mt="15px" 
                w="100%" 
                bg="blue.200" 
                type='submit' 
                disabled={loading}
              >
                Submit
              </Button>
      
              {errorMessage && (
                <Box className="fixed bottom-0 right-0 p-4 m-4 max-w-sm bg-red-500 text-white rounded">
                  <Text>{errorMessage}</Text>
                </Box>
              )}
              {successMessage && (
                <Box className="fixed bottom-0 right-0 p-4 m-4 max-w-sm bg-green-500 text-white rounded">
                  <Text>{successMessage}</Text>
                </Box>
              )}
            </chakra.form>
      
            <br></br>
            <Text fontSize="12px" fontWeight="bold">Already have an account? Sign In</Text>
            <Link fontSize="12px" fontWeight="bold" href="/signin">Sign In</Link>
          </Flex>
        </Flex>
      )

}