import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
    Avatar,
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Icon,
    Spinner,
    Stack,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import 'moment-timezone';
import { useContext, useEffect, useState } from 'react';
import Moment from 'react-moment';
import { Redirect, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { StoryContext } from '../../context/storyContext';
import Alert from '../generic/alert';
import StoryModal from './storyModal';

const StoryView = () => {
    const { user } = useContext(AuthContext);
    const color = useColorModeValue('white', 'gray.800');
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const { deleteStory, singleStory, getSingleStory, storyLoading } = useContext(StoryContext);
    const key = useParams().id;

    useEffect(() => {
        getSingleStory(key);
    }, []);

    return storyLoading ? (
        <Center w="100%" h="75vh">
            <Spinner />
        </Center>
    ) : !singleStory ? (
        <Redirect to="/404" />
    ) : (
        <Center>
            <Box
                m="12%"
                mt="8%"
                bg="gray.200"
                p="200"
                minH="15vh"
                w="55vw"
                minWidth="350px"
                p={1}
                borderRadius="md"
                shadow="xl"
            >
                <Box>
                    <Flex
                        w="100%"
                        bg={color}
                        boxShadow="base"
                        p={6}
                        direction="column"
                        borderRadius="md"
                    >
                        <Box pb="5">
                            <Stack direction="row">
                                <Avatar
                                    name={singleStory.author}
                                    src="https://bit.ly/broken-link"
                                />
                                <Flex direction="column" pt="1" pb="3">
                                    <h1>
                                        <b> {singleStory.author}</b>
                                    </h1>
                                    <i>
                                        <Moment fromNow fontStyle>
                                            {singleStory.postedAt}
                                        </Moment>
                                    </i>
                                </Flex>
                            </Stack>
                            <Flex direction="row">
                                <Heading color="blue.600">{singleStory.title}</Heading>
                                <Box pl="10">
                                    {user && user.username === singleStory.author && (
                                        <Flex direction="row">
                                            <Button
                                                p="0"
                                                onClick={() => setShowModal(true)}
                                                background="none"
                                                border="none"
                                                boxShadow="none !important"
                                            >
                                                <Icon as={EditIcon} />
                                            </Button>
                                            {showModal && (
                                                <StoryModal
                                                    close={() => {
                                                        setShowModal(false);
                                                        document.getElementById(
                                                            'root'
                                                        ).style.filter = 'none';
                                                    }}
                                                    storyId={singleStory.id}
                                                    title={singleStory.title}
                                                    story={singleStory.story}
                                                />
                                            )}
                                            <Button
                                                p="0"
                                                boxShadow="none !important"
                                                onClick={() => setShowAlert(true)}
                                            >
                                                <Icon as={DeleteIcon} />
                                            </Button>
                                            {showAlert && (
                                                <Alert
                                                    show={showAlert}
                                                    close={() => {
                                                        setShowAlert(false);
                                                    }}
                                                    confirm={() => deleteStory(singleStory.id)}
                                                />
                                            )}
                                        </Flex>
                                    )}
                                </Box>
                            </Flex>
                        </Box>

                        <Box w="100%">
                            <Text whiteSpace="pre-line" as="p" fontSize="lg">
                                {singleStory.story}
                            </Text>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Center>
    );
};

export default StoryView;
