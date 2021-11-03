import Head from "next/head";
import Hero from "../components/Hero";
import { Cards } from "../components/Cards";
import { Box, Text } from "@chakra-ui/layout";
import { useAllCoursesQuery } from "../generated/graphql";
import { useEffect, useState } from "react";

export default function Home() {
  const [{ data }] = useAllCoursesQuery();
  const [arr, setArr] = useState([]);
  useEffect(() => {
    if (data) {
      setArr(data.getAllCourses);
    } else {
      setArr([]);
    }
  });
  return (
    <Box>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Box display="flex" alignItems="center" justifyContent="center">
        <Cards articles={arr} />
      </Box>
    </Box>
  );
}
