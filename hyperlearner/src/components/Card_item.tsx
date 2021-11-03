import React from 'react'
import Link from 'next/link'
import { Box, Text } from '@chakra-ui/layout'

function Card_item({ article }) {
  return (
    <Box
    bg="brand.600"  
    m="20px"
    width="45%"
    display= "flex"
    flexDirection= "row"
    padding= "20px"
    height= "500px"
    borderRadius="20px"
    boxShadow="5px 5px 15px black"
    >
      {/* <Link href={`/article/${article.id}`}> */}
      <Text
      display="flex"
      flex-direction="column"      /* border: 2px solid red; */
      width= "500px"
      marginRight= "50px"
      backgroundColor= "brand.800"
      color="wheat"
      font-family= "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
      padding= "20px"
      borderRadius= "20px"
      boxShadow= "1px 1px 15px black">
        <br/>
        <h3>
        {article.name}</h3>
        <br/>
        {article.subject}<br/>
        {article.title}
      </Text>
      {/* </Link> */}
      <Box>
      <Box
        width="200px"
        height= "200px"
        bgColor="brand.700"
        borderRadius= "20px"
        >
        
      </Box>
      <Text
        width="200px"
        height= "50px"
        borderRadius= "20px"
        marginTop="200px"
        border=" 2px solid red"
        color="black"
      >
        {article.author}
      </Text>
      </Box>
    </Box>
  )
}

export default Card_item
