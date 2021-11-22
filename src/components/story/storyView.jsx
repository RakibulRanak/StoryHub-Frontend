import { Center, Box, Heading, Flex, Button, Text, Avatar, Stack, Icon, Spinner } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { useContext, useState, useEffect } from "react";
import { AuthContext } from './../../context/authContext'
import StoryModal from "./storyModal";
import Moment from 'react-moment';
import 'moment-timezone';
import { StoryContext } from "../../context/storyContext";
import Alert from "../generic/alert";
import { useParams } from "react-router-dom";

const StoryView = () => {

    const { user } = useContext(AuthContext);
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
    ) :
        (< Center  >
            <Box m="10%" bg="white" p="200" minH="15vh" minW="85vh" p={3} >

                <Flex border="1px" w="100%" bg="gray.100" padding="25px" direction="column" borderRadius="md">
                    <Box pb="5">
                        <Stack direction="row">
                            <Avatar name={singleStory.author} src="https://bit.ly/broken-link" />
                            <Flex direction="column" pt="1" pb="3">
                                <h1 ><b> {singleStory.author}</b></h1>
                                <i><Moment fromNow fontStyle>{singleStory.postedAt}</Moment></i>
                            </Flex>
                        </Stack>
                        <Flex direction="row">
                            <Heading color="blue.600">
                                {singleStory.title}
                            </Heading>
                            <Box pl="10">
                                {
                                    user && user.username === singleStory.author && (
                                        <Flex direction="row">
                                            <Button p="0" onClick={() => setShowModal(true)} background="none" border="none" boxShadow="none !important">
                                                <Icon as={EditIcon} />
                                            </Button>
                                            {showModal &&
                                                <StoryModal show={showModal} close={() => {
                                                    setShowModal(false)
                                                }} storyId={singleStory.id}
                                                    title={singleStory.title} story={singleStory.story} />
                                            }
                                            <Button p="0" boxShadow="none !important" onClick={() => setShowAlert(true)}>
                                                <Icon as={DeleteIcon} />
                                            </Button>
                                            {showAlert &&
                                                <Alert show={showAlert} close={() => {
                                                    setShowAlert(false)
                                                }} confirm={() => deleteStory(singleStory.id)} />

                                            }
                                        </Flex>
                                    )
                                }
                            </Box>
                        </Flex>
                    </Box>

                    <Box w="100%">
                        <Text as="p" fontSize="lg">
                            {singleStory.story}
                        </Text>
                    </Box>
                </Flex>

            </Box >
        </Center >
        );

};

export default StoryView;
