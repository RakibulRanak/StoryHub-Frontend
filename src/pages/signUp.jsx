import Layout from "../components/generic/layout";
import {
  Box,
  Button,
  Center,
  Input,
  InputGroup,
  Heading,
  Text,
  Spinner,
  useToast,
  InputRightElement
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const SignUp = (props) => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const { loggedIn, login } = useContext(AuthContext);
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [requestState, setRequestState] = useState("not-requested");
  const [message, setMessage] = useState(null)

  const toast = useToast();

  const handleClick = () => setShow(!show)
  const signUp = (e) => {
    e.preventDefault();
    setRequestState("loading");

    axios
      .post("http://localhost:8000/api/v1/users", { email, username, name, password, confirmPassword })
      .then((res) => {
        setRequestState("loaded");
        toast({
          title: "Your Account is created! Please login to continue",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        history.push("/signin");

      })
      .catch((err) => {
        setRequestState("error");
        setMessage(err.response.data.message)
      });
  };

  if (loggedIn) return <Redirect to="/" />;
  else
    return (
      <Layout>
        <Center h={["75vh", "85vh"]}>
          <Box
            boxShadow="xl"
            textAlign="center"
            bg="white"
            borderRadius={5}
            p={4}
          >
            <Heading size="md" m={1}>
              Create Your Account
            </Heading>
            <form onSubmit={signUp}>
              <Input
                placeholder="Email"
                type="email"
                m={1}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
              />
              <InputGroup m={1}>
                <Input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </InputGroup>
              <InputGroup m={1}>
                <Input
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </InputGroup>
              <InputGroup m={1}>
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <InputRightElement width="4.5rem">
                  <Button boxShadow="none !important" h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <InputGroup m={1}>
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Confirm Password"
                  name="confirmpassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </InputGroup>

              {requestState === "error" && (
                <Text display="block" fontSize="sm" color="tomato">
                  Email or Username Already Exists!
                </Text>
              )}
              <Button
                colorScheme="teal"
                size="sm"
                m={1}
                mb={4}
                disabled={requestState === "loading" ? 1 : 0}
                type="submit"
              >
                {requestState === "loading" && <Spinner mr={3} />}Sign Up
              </Button>
            </form>
          </Box>
        </Center>
      </Layout>
    );
};

export default SignUp;