import React from 'react'
import Link from 'next/link'
import { Box, Text } from '@chakra-ui/layout'
import { useMeQuery } from '../generated/graphql'
import { Button } from '@chakra-ui/button';

function Nav() {
    const[,me]=useMeQuery();
    async(e)=>{
        const response = await me();
        console.log(response);
    }
    return (
        <Box
        height= "70px"
        p="20px"
        display="flex"
        align-items="center"
        justify-content="flex-start"
        flexDirection="row"
        width= "100%"
        bg="brand.700"
        >
            <Text
            color="white"
            d="flex"
            justifyContent="space-evenly"
            width="20%"
            >
                <Link href='/'>Home</Link>
                <Link href='/signin'>Signin</Link>
                <Link href='/signup'>Signup</Link>
            </Text>
        <Button m="-1.5"color="black"onClick={async(e)=> {
            e.preventDefault()
                const response = await me();
                console.log(response)
            }}>User</Button>
        </Box>
        
    )
}

export default Nav
