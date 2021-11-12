import Layout from "../components/generic/layout";
import { Center, Box, Heading } from "@chakra-ui/react";
import Story from "../components/story/story";
import { useState, useEffect } from "react";
import axios from "axios";


const Stories = (props) => {

    const [stories, setStories] = useState([]);
    useEffect(() => {
        console.log("dhukse")
        axios
            .get("http://192.168.1.128:8000/api/v1/stories?page=1&size=4")
            .then((res) => {
                setStories(res.data.data);
            })
            .catch((err) => { });
    }, []);

    return (
        < Layout >
            <Box minH="75vh" p={3}>
                <Box align="center" justifyContent="center">
                    <Heading margin="3">Stories</Heading>
                </Box>
                <Center>
                    <Box bg="white" p={2} borderRadius="md" shadow="xl">
                        {stories.map((story) => (
                            <Story{...story} key={story.id} />
                        ))}
                    </Box>
                </Center>
            </Box>
        </Layout >
    );

};

export default Stories;
