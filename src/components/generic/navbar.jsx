import { Box, Button, Flex, Heading, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext, useState } from "react";
import { ModalHover } from 'react-modal-hover'
const MyNavbar = (props) => {
  const { loggedIn, login, logoutHandler, user } = useContext(AuthContext);
  const MenuItems = (props) => (
    <Link
      as={RouterLink}
      mt={{ base: 4, md: 0 }}
      mr={6}
      display="block"
      to={props.to}
      style={{ color: '#FFF', textDecoration: 'none' }}
    >
      {props.children}
    </Link>
  );

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.8rem"
      bg="gray.800"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          <MenuItems to="/" >Story Hub</MenuItems>
        </Heading>
      </Flex>

      {user &&
        (
          <Button colorScheme="white" ml="auto" mr="5">
            {
              user.username
            }
            {/* <a href="mailto:someone@yoursite.com">Email Us</a> */}

          </Button>
        )
      }
      {
        !loggedIn &&
        (
          <Button as={RouterLink} to="/signin" bg="transparent" border="1px">
            Log In
          </Button>
        )
      }
      {
        loggedIn &&
        (
          <Button onClick={logoutHandler} bg="transparent" border="1px">
            Log Out
          </Button>
        )
      }
    </Flex >
  );
};

export default MyNavbar;
