import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { useLoginMutation } from "../generated/graphql";

const signin = () => {
  const [, login] = useLoginMutation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <Box height="100%" display="flex" justifyContent="center" padding="100px">
      <Box
        display="flex"
        minHeight="500px"
        justifyContent="center"
        bgColor="brand.800"
        width="40%"
        borderRadius="30px"
        padding="20px"
        paddingTop="100px"
      >
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const response = await login({
              details: { username: username, password: password },
            });
            console.log(response.data);
            setName(response.data.login.username);
          }}
        >
          <Box
            width="600px"
            height="100px"
            padding="10px"
            display="flex"
            justifyContent="center"
          >
            <Box
              htmlFor="username"
              color="white"
              m="10px"
              fontSize="24px"
              width="170px"
            >
              Username :{" "}
            </Box>
            <Input
              m="10px"
              bgColor="brand.600"
              height="50px"
              fontSize="24"
              type="text"
              name="username"
              id="username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>

          <Box
            width="600px"
            height="100px"
            padding="10px"
            display="flex"
            justifyContent="center"
          >
            <Box
              htmlFor="password"
              color="white"
              m="10px"
              fontSize="24px"
              width="170px"
            >
              Password :{" "}
            </Box>
            <Input
              m="10px"
              height="50px"
              fontSize="24"
              bgColor="brand.600"
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box
            width="600px"
            height="100px"
            padding="10px"
            display="flex"
            justifyContent="center"
            marginTop="50px"
          >
            <Button
              width="200px"
              height="70px"
              type="submit"
              bgColor="red.500"
              fontSize="24"
            >
              Login
            </Button>
          </Box>
          <Text color="wheat">Logged in as {name}</Text>
        </form>
      </Box>
    </Box>
  );
};
export default signin;
