import {
    Button,
    Flex,
    Heading,
    Link,
    Text,
    useColorMode,
    useColorModeValue
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Switch from 'react-switch';
import { AuthContext } from '../../context/authContext';

const MyNavbar = (props) => {
    const { loggedIn, logoutHandler, user } = useContext(AuthContext);
    const [checked, setChecked] = useState(JSON.parse(localStorage.getItem('dark_theme')) || false);

    const { colorMode, toggleColorMode } = useColorMode();
    const navColor = useColorModeValue('gray.800', 'gray.500');
    const color = useColorModeValue('white', 'gray.800');
    console.log(color);
    const handleChange = () => {
        setChecked(!checked);
        localStorage.setItem('dark_theme', JSON.stringify(!checked));
        toggleColorMode();
    };

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
            boxShadow="2xl"
            bg={navColor}
            color="white"
            {...props}
        >
            <Flex align="center" mr={0}>
                <Heading as="h1" size="lg" letterSpacing="-.1rem">
                    <MenuItems to="/">StoryHub</MenuItems>
                </Heading>
            </Flex>
            {/* <Button onClick={toggleColorMode}>
                Toggle {colorMode === 'light' ? 'white' : 'gray.800'}
            </Button> */}

            <Switch ml="2px" pl="1px" onChange={handleChange} checked={checked} />

            {user && (
                <Button boxShadow="none !important" colorScheme="white" ml="auto" mr="0">
                    <Text fontSize="17px" color="white">
                        {user.username}
                    </Text>
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
