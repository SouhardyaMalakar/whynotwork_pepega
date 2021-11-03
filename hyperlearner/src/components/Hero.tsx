import React from 'react'
import {motion} from 'framer-motion'
import Typical from 'react-typical'
import { Text } from '@chakra-ui/layout'

function Hero() {
  return (
    <Text
        bgGradient="linear(to-l, #FCDAB7 ,#1E5F74)"
        bgClip="text"
        fontSize="8xl"
        fontWeight="extrabold"
        margin="3"
        width="60%"
        padding="40px"
        >
      <div>Welcome to </div>
        <Typical
        steps = {[
          "Success...!",
          2500,
          "Fun...!",
          2500,
          "Learning...",
          2500,
          "HyperLearning...!!",
          5000,
        ]}
        loop ={Infinity}
        wrapper ='p'/>
  </Text>
        
  )
}

export default Hero
