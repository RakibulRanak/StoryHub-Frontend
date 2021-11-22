import Layout from "../components/generic/layout";
import { Center, Box, Heading, Textarea, Text, Button, Container } from "@chakra-ui/react";
import Story from "../components/story/story";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext"
import ResizeTextarea from "react-textarea-autosize";


const Stories = (props) => {
    const { loggedIn, login } = useContext(AuthContext);
    const [stories, setStories] = useState([]);
    useEffect(() => {
        console.log("dhukse")
        axios
            .get("/api/v1/stories?page=1&size=4")
            .then((res) => {
                setStories(res.data.data);
            })
            .catch((err) => { });
    }, []);

    return (
        < Layout >
            <Container centerContent minH="70vh">
                <Center>
                    <Box minH="75vh" p={3}>
                        {
                            loggedIn && (
                                <div>
                                    <Text align="center" mb="8px"><Heading margin="3">Stories</Heading></Text>
                                    <Textarea bg="white" resize="horizontal" as={ResizeTextarea}
                                        overflow="hidden" size="sm" colorScheme="white" placeholder="Post your story" />
                                    <Button colorScheme="teal" size="sm">Submit</Button>
                                </div>
                            )
                        }

                        <Box bg="white" p={2} mt="10" pt="5" borderRadius="md" shadow="xl">
                            {stories.map((story) => (
                                <Story{...story} key={story.id} />
                            ))}
                        </Box>

                    </Box>
                </Center>
            </Container>
        </Layout >
    );

};

export default Stories;
