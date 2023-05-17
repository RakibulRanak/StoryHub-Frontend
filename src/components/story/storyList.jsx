import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
    Avatar,
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Icon,
    Link,
    Stack,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import 'moment-timezone';
import { useContext, useState } from 'react';
import Moment from 'react-moment';
import { Link as RouterLink } from 'react-router-dom';
import ShowMoreText from 'react-show-more-text';
import { AuthContext } from '../../context/authContext';
import { StoryContext } from '../../context/storyContext';
import Alert from '../generic/alert';
import StoryModal from './storyModal';

const StoryList = (story) => {
    const { user } = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const { deleteStory } = useContext(StoryContext);
    const color = useColorModeValue('white', 'gray.800');

    return (
        <Box minH="15vh" w="55vw" minWidth="350px" pb={0.5} pt={1} pl={1} pr={1}>
            <Center>
                <Flex
                    w="100%"
                    bg={color}
                    padding="25px"
                    boxShadow="base"
                    direction="column"
                    borderRadius="md"
                >
                    <Box pb="5">
                        <Stack direction="row">
                            <Avatar name={story.author} src="https://bit.ly/broken-link" />
                            <Flex direction="column" pt="1" pb="1">
                                <h1>
                                    <b> {story.author}</b>
                                </h1>
                                <i>
                                    <Moment fromNow fontStyle>
                                        {story.postedAt}
                                    </Moment>
                                </i>
                            </Flex>
                        </Stack>
                        <Flex direction="row">
                            <Heading color="blue.600">
                                <Link as = {RouterLink} to ={`/stories/${story.id}`}  style={{ textDecoration: 'none' }}>
                                    {' '}
                                    {story.title}
                                </Link>
                            </Heading>
                            <Box pl="10">
                                {user && user.username === story.author && (
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
                                                    document.getElementById('root').style.filter =
                                                        'none';
                                                }}
                                                storyId={story.id}
                                                title={story.title}
                                                story={story.story}
                                            />
                                        )}
                                        <Button
                                            p="0"
                                            boxShadow="none !important"
                                            background="none"
                                            border="none"
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
                                                confirm={() => deleteStory(story.id)}
                                            />
                                        )}
                                    </Flex>
                                )}
                            </Box>
                        </Flex>
                    </Box>

                    <Box w="100%">
                        <ShowMoreText
                            lines={3}
                            more={
                                <span>
                                    {' '}
                                    <b>See more</b>
                                </span>
                            }
                            less={
                                <span>
                                    {' '}
                                    <b>See less</b>
                                </span>
                            }
                        >
                            <Text whiteSpace="pre-line" as="p" fontSize="md" noOfLines={6}>
                                {story.story}
                            </Text>
                        </ShowMoreText>
                    </Box>
                </Flex>
            </Center>
        </Box>
    );
};

export default StoryList;
