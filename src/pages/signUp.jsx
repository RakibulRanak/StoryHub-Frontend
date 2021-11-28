import {
    Box,
    Button,
    Center,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Spinner,
    Text,
    useColorModeValue,
    useToast
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import Layout from '../components/generic/layout';
import { AuthContext } from '../context/authContext';

const signUpSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required!')
        .min(5, 'username must be min 5 chars.')
        .matches(/^\S+$/, "Username can't contain white space"),
    password: yup
        .string()
        .required('Password is required!')
        .min(8, 'Password should be min 8 chars.'),
    confirmPassword: yup
        .string()
        .required('Password confirmation is required!')
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    name: yup.string().trim().required('Name is required!'),
    email: yup.string().email('Must be a valid email').max(255).required('Email is required!'),
});

const SignUp = (props) => {
    const color = useColorModeValue('gray.100', 'gray.600');
    const history = useHistory();
    const [show, setShow] = useState(false);
    const { loggedIn, login } = useContext(AuthContext);
    const [requestState, setRequestState] = useState('not-requested');
    const [message, setMessage] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(signUpSchema),
        mode: 'onChange',
    });
    const toast = useToast();
    const handleClick = () => setShow(!show);
    const signUp = (data, e) => {
        e.preventDefault();
        const { email, username, name, password, confirmPassword } = data;
        setRequestState('loading');
        axios
            .post('/api/v1/users', { email, username, name, password, confirmPassword })
            .then((res) => {
                setRequestState('loaded');
                toast({
                    title: 'Your Account is created! Please login to continue',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
                history.push('/signin');
            })
            .catch((err) => {
                setRequestState('error');
                if (err.response.status == 500) setMessage('Something went wrong!');
                else setMessage(err.response.data.message);
            });
    };

    if (loggedIn) return <Redirect to="/" />;
    return (
        <Layout>
            <Center h={['75vh', '85vh']}>
                <Box boxShadow="dark-lg" textAlign="center" bg={color} borderRadius={5} p={10}>
                    <Heading size="md" m={3}>
                        Create Your Account
                    </Heading>
                    <form onSubmit={handleSubmit(signUp)} noValidate>
                        <Input
                            placeholder="Email"
                            type="email"
                            m={1}
                            name="email"
                            required
                            autoFocus
                            {...register('email')}
                        />
                        <p>
                            <Text color="red">{errors.email?.message}</Text>
                        </p>
                        <InputGroup m={1}>
                            <Input
                                type="text"
                                placeholder="Name"
                                name="name"
                                required
                                {...register('name')}
                            />
                        </InputGroup>
                        <p>
                            <Text color="red">{errors.name?.message}</Text>
                        </p>
                        <InputGroup m={1}>
                            <Input
                                type="text"
                                placeholder="Username"
                                name="username"
                                required
                                {...register('username')}
                            />
                        </InputGroup>
                        <p>
                            <Text color="red">{errors.username?.message}</Text>
                        </p>
                        <InputGroup m={1}>
                            <Input
                                type={show ? 'text' : 'password'}
                                placeholder="Password"
                                name="password"
                                required
                                {...register('password')}
                            />
                            <InputRightElement width="4.5rem">
                                <Button
                                    boxShadow="none !important"
                                    h="1.75rem"
                                    size="sm"
                                    onClick={handleClick}
                                >
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <p>
                            <Text color="red">{errors.password?.message}</Text>
                        </p>
                        <InputGroup m={1}>
                            <Input
                                type={show ? 'text' : 'password'}
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                required
                                {...register('confirmPassword')}
                            />
                        </InputGroup>
                        <p>
                            <Text color="red">{errors.confirmPassword?.message}</Text>
                        </p>

                        {requestState === 'error' && (
                            <Text display="block" fontSize="md" color="tomato">
                                {message}
                            </Text>
                        )}
                        <Button
                            colorScheme="teal"
                            size="sm"
                            m={1}
                            mb={4}
                            disabled={requestState === 'loading' ? 1 : 0}
                            type="submit"
                        >
                            {requestState === 'loading' && <Spinner mr={3} />}Sign Up
                        </Button>
                    </form>
                </Box>
            </Center>
        </Layout>
    );
};

export default SignUp;
