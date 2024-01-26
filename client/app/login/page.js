"use client"

import { useState } from 'react';
import { Box, Text, Input, Button, FormControl, FormLabel, HStack, useToast, Textarea, Image, Center, Heading, Flex, Spacer, InputGroup, InputRightElement, Link } from "@chakra-ui/react";
import { chakra } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function SignIn(){
    
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [showPassword, setShowPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('')
   
    const handleClick = () => setShowPassword(!showPassword)
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email || !password) {
          setErrorMessage('Please enter an email and password');
          setLoading(false);
          return;
        }
        try {
          const response = await fetch('http://localhost:5000/api/user/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email,
              password
            })
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log('Signing in with email:', email, 'and password:', password);
          localStorage.setItem("userInfo", JSON.stringify(data.token));
          // Reset form fields
          window.location.href = '/chats';
        } catch (error) {
          console.error('Error Occurred:', error.message);
        }
      };

      
      return (
        <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column', alignItems: 'center', padding: '10', backgroundColor: 'sky.200' }}>
          <Box sx={{ display: 'flex', textAlign: 'center', backgroundColor: 'white', width: 'full', height: '100px', borderRadius: 'lg', border: '1px' }}>
            <Heading sx={{ width: 'full', marginTop: '40px', marginBottom: '15px', fontWeight: 'bold' }}>ChatApp</Heading>
          </Box>
          <br></br>
          <Box sx={{ display: 'flex', flexDirection: 'column', padding: '10', backgroundColor: 'white', width: 'full', height: 'full', borderRadius: 'lg', border: '1px' }}>
            <chakra.form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  value={email}
                  borderColor='black'
                  borderWidth='2px'
                  textAlign='center'
                  placeholder='Enter your email'
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormControl>
      
              <FormControl>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    value={password}
                    borderColor='black'
                    borderWidth='2px'
                    textAlign='center'
                    placeholder='Enter your Password'
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? 'text' : 'password'}
                    required
                  />
                  <InputRightElement width="4.5rem">
                    <Button height="1.75rem" size="sm" onClick={handleClick}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
      
              <Button
                marginTop='15px'
                width='full'
                backgroundColor='blue.200'
                type='submit'
              >
                Submit
              </Button>
      
              <Button
                marginTop='15px'
                width='full'
                backgroundColor='red.200'
                onClick={(e) => {
                  e.preventDefault();
                  setEmail("guest@example.com");
                  setPassword("123456");
                }}
              >
                Get Guest User Credentials
              </Button>
      
              <Button
                marginTop='15px'
                width='full'
                backgroundColor='red.200'
                onClick={(e) => {
                  e.preventDefault();
                  setEmail("guest2@example.com");
                  setPassword("123456");
                }}
              >
                Get Guest User2 Credentials
              </Button>
      
              {errorMessage && (
                <Box
                  position='fixed'
                  bottom='0'
                  right='0'
                  padding='4'
                  margin='4'
                  maxWidth='sm'
                  backgroundColor='red.500'
                  color='white'
                  borderRadius='md'
                >
                  <Text>{errorMessage}</Text>
                </Box>
              )}
              {successMessage && (
                <Box
                  position='fixed'
                  bottom='0'
                  right='0'
                  padding='4'
                  margin='4'
                  maxWidth='sm'
                  backgroundColor='green.500'
                  color='white'
                  borderRadius='md'
                >
                  <Text>{successMessage}</Text>
                </Box>
              )}
            </chakra.form>
      
            <Text fontSize='12px'>Don't have an account</Text>
            <Link as={NextLink} fontSize='12px' href="/register">Register</Link>
          </Box>
        </Box>
      )

}