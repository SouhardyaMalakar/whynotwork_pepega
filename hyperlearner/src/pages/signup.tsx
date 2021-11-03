import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { Button ,Text} from "@chakra-ui/react";
import React,{useState} from "react";
import { useCreateStudentMutationMutation } from "../generated/graphql";



const signup = () =>
{
    
    const [username,setUsername] =  useState("");
    const [first,setFirst] =  useState("");
    const [last,setLast] =  useState("");
    const [phone,setPhone] =  useState("");
    const [password,setPassword] =  useState("");
    const[,register] = useCreateStudentMutationMutation();
    const[name,setName] =useState("");
    
    

    return(
        <Box height="100%" display="flex" justifyContent="center" padding="100px">
        <Box
          display="flex"
          minHeight="500px"
          justifyContent="center"
          bgColor="brand.800"
          width="40%"
          borderRadius="30px"
          padding="20px"
          paddingTop="50px"
        >
        <form onSubmit={async(e)=> {
            e.preventDefault()
                const response = await register({details:{username:username,password:password,first_name:first,last_name:last,mobile_num:phone}});
                console.log(response)
                setName(response.data.createStudent.username)

            }
        }>
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
              bgColor="brand.600"
              height="50px"
              fontSize="24"
              type="password"
              name="Phone"
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
          >
            <Box
              htmlFor="first_name"
              color="white"
              m="10px"
              fontSize="24px"
              width="170px"
            >
              FirstName :{" "}
            </Box>
            <Input
              m="10px"
              bgColor="brand.600"
              height="50px"
              fontSize="24"
              type="text"
              name="first_name"
              id="first_name"
              autoComplete="off"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
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
              htmlFor="last_name"
              color="white"
              m="10px"
              fontSize="24px"
              width="170px"
            >
              LastName :{" "}
            </Box>
            <Input
              m="10px"
              bgColor="brand.600"
              height="50px"
              fontSize="24"
              type="text"
              name="last_name"
              id="last_name"
              autoComplete="off"
              value={last}
              onChange={(e) => setLast(e.target.value)}
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
              htmlFor="phone"
              color="white"
              m="10px"
              fontSize="24px"
              width="170px"
            >
              Phone :{" "}
            </Box>
            <Input
              m="10px"
              bgColor="brand.600"
              height="50px"
              fontSize="24"
              type="text"
              name="phone"
              id="phone"
              autoComplete="off"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
              height="50px"
              type="submit"
              bgColor="red.500"
              fontSize="24"
            >
              Register
            </Button>
          </Box>
          <Text color="wheat">Registered as {name}</Text>
        </form>
        </Box>
        </Box>
    )
}
export default signup