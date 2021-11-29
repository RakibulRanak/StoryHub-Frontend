import { Box, Center, Flex, Spinner, useColorModeValue } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import { StoryContext } from '../../context/storyContext';
import Pagination from '../pagination/pagination';
import StoryList from './storyList';
import StoryModal from './storyModal';

const AllStory = (props) => {
    const { loggedIn } = useContext(AuthContext);
    const { getStories, stories, storiesLoading } = useContext(StoryContext);
    const [storiesPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const color = useColorModeValue('gray.200', 'gray.700');

    useEffect(() => {
        getStories();
    }, []);

    const indexOfLastStory = currentPage * storiesPerPage;
    const indexOfFirstStory = indexOfLastStory - storiesPerPage;
    const currentStories = stories.slice(indexOfFirstStory, indexOfLastStory);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return storiesLoading ? (
        <Center w="100%" h="75vh">
            <Spinner />
        </Center>
    ) : (
        <>
            <Center pb="10" ml="13%" mr="13%">
                <Flex pt={10} direction="column">
                    {loggedIn && (
                        <>
                            {' '}
                            <Box
                                rounded="md"
                                boxShadow="md"
                                bg={color}
                                onClick={() => setShowModal(true)}
                                align="center"
                                p={3}
                            >
                                <i>Want to post a story ?</i>
                            </Box>
                        </>
                    )}
                    {showModal && (
                        <StoryModal
                            close={() => {
                                setShowModal(false);
                                document.getElementById('root').style.filter = 'none';
                            }}
                        />
                    )}
                    {/* <Text align="center" mb="8px">
                        <Heading margin="3">Stories</Heading>
                    </Text> */}
                    <Box bg="gray.200" pl={0} mt="10vh" pt={0} pb={0} borderRadius="md" shadow="xl">
                        {currentStories.map((story) => (
                            <StoryList {...story} key={story.id} />
                        ))}
                    </Box>
                </Flex>
            </Center>
            <Center pb={10}>
                <Pagination
                    storiesPerPage={storiesPerPage}
                    totalStories={stories.length}
                    currentPage={currentPage}
                    paginate={paginate}
                />
            </Center>
        </>
    );
};

export default AllStory;
