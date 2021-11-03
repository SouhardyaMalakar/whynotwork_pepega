import { Box } from '@chakra-ui/layout'
import React from 'react'
import Card_item from './Card_item'

function cards({articles}) {
  return (
    <Box
      width="100%"
      display= "flex"
      alignItems= "center"
      justifyContent="center"
      flexWrap="wrap"
      padding="50px"
    >
      {articles.map((article) =>(
      <Card_item article={article} key={article.id}/>
      ))}
      {articles.map((article) =>(
      <Card_item article={article} key={article.id}/>
      ))}
      {articles.map((article) =>(
      <Card_item article={article} key={article.id}/>
      ))}
      {articles.map((article) =>(
      <Card_item article={article} key={article.id}/>
      ))}
      {articles.map((article) =>(
      <Card_item article={article} key={article.id}/>
      ))}
      {articles.map((article) =>(
      <Card_item article={article} key={article.id}/>
      ))}
      {articles.map((article) =>(
      <Card_item article={article} key={article.id}/>
      ))}
      {articles.map((article) =>(
      <Card_item article={article} key={article.id}/>
      ))}
      {articles.map((article) =>(
      <Card_item article={article} key={article.id}/>
      ))}
      {articles.map((article) =>(
      <Card_item article={article} key={article.id}/>
      ))}
      
    </Box>
  )
}

export default cards
