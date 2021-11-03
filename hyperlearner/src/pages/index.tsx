import Head from 'next/head'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import { Box, Text } from '@chakra-ui/layout'
import {  useAllCoursesQuery } from '../generated/graphql'
import { useState } from 'react'



export default function Home() {
  const [{ data }] = useAllCoursesQuery ();  
  // if(data!==undefined){
  //   const body = data;
  //   console.log(body.getAllCourses);
  // }
   return (
    <Box>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Hero/>
      <Box
        display= "flex"
        alignItems= "center"
        justifyContent="center"
      >
        <Cards articles ={data.getAllCourses}/>
      </Box>
    </Box>
  )
}


