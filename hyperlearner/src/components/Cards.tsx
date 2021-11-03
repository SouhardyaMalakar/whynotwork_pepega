import React from "react";
import { Box } from "@chakra-ui/layout";
import Card_item from "./Card_item";

import { AllCoursesQuery } from "../generated/graphql";

interface CardsProps {
  articles: AllCoursesQuery["getAllCourses"];
}

export const Cards: React.FC<CardsProps> = ({ articles }) => {
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      padding="50px"
    >
      {articles.map((article) => (
        <Card_item article={article} key={article.id} />
      ))}
      {articles.map((article) => (
        <Card_item article={article} key={article.id} />
      ))}
      {articles.map((article) => (
        <Card_item article={article} key={article.id} />
      ))}
      {articles.map((article) => (
        <Card_item article={article} key={article.id} />
      ))}
      {articles.map((article) => (
        <Card_item article={article} key={article.id} />
      ))}
      {articles.map((article) => (
        <Card_item article={article} key={article.id} />
      ))}
      {articles.map((article) => (
        <Card_item article={article} key={article.id} />
      ))}
      {articles.map((article) => (
        <Card_item article={article} key={article.id} />
      ))}
      {articles.map((article) => (
        <Card_item article={article} key={article.id} />
      ))}
      {articles.map((article) => (
        <Card_item article={article} key={article.id} />
      ))}
    </Box>
  );
};
