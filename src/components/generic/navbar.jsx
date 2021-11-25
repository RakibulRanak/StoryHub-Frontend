import { Button, Flex, Heading, Link } from '@chakra-ui/react';
import { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const MyNavbar = (props) => {
    const { loggedIn, logoutHandler, user } = useContext(AuthContext);
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
            <Flex align="center" mr={4}>
                <Heading as="h1" size="lg" letterSpacing="-.1rem">
                    <MenuItems to="/">StoryHub</MenuItems>
                </Heading>
            </Flex>

            {user && (
                <Button boxShadow="none !important" colorScheme="white" ml="auto" mr="4">
                    {user.username}
                </Button>
            )}
            {!loggedIn && (
                <Button as={RouterLink} to="/signin" bg="transparent" border="1px">
                    Log In
                </Button>
            )}
            {loggedIn && (
                <Button onClick={logoutHandler} bg="transparent" border="1px">
                    Log Out
                </Button>
            )}
        </Flex>
    );
};

export default MyNavbar;
