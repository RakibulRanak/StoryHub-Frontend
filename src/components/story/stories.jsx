import Layout from "../generic/layout";
import { Center, Box, Heading, Textarea, Text, Button, Container, Spinner, FormControl, Input, FormLabel, Flex } from "@chakra-ui/react";
import Story from "./story";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext"
import { StoryContext } from "../../context/storyContext";
import ResizeTextarea from "react-textarea-autosize";
import StoryModal from "./storyModal";

import Pagination from "../pagination/pagination";

const Stories = (props) => {
    const { loggedIn, login } = useContext(AuthContext);
    const { getStories, stories, storiesLoading } = useContext(StoryContext)
    const [storiesPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        getStories();
    }, []);

    const indexOfLastStory = currentPage * storiesPerPage;
    const indexOfFirstStory = indexOfLastStory - storiesPerPage;
    const currentStories = stories.slice(indexOfFirstStory, indexOfLastStory);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return storiesLoading ? (
        <Center w="100%" h="75vh">
            <Spinner />
        </Center>
    ) : (

        < Layout >
            <Container centerContent minH="70vh" pb="10" >
                <Center pb="10">
                    <Flex pt={10} direction="column">
                        {

                            loggedIn && <> <Box rounded="md" bg="white" onClick={() => setShowModal(true)} align="center" p={3}>
                                Want to post a story ?
                            </Box><StoryModal show={showModal} close={() => setShowModal(false)} /></>
                        }
                        <Text align="center" mb="8px"><Heading margin="3">Stories</Heading></Text>
                        <Box bg="white" p={2} mt="10" pt="5" borderRadius="md" shadow="xl">
                            {currentStories.map((story) => (
                                <Story{...story} key={story.id} />
                            ))}
                        </Box>
                    </Flex>
                </Center>
                <Pagination storiesPerPage={storiesPerPage}
                    totalStories={stories.length}
                    currentPage={currentPage}
                    paginate={paginate} />

            </Container>
        </Layout >
    );

};

export default Stories;
