import { Center, Box, Heading, Flex } from "@chakra-ui/react";
const Story = (story) => {

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setRequestState("loading");
    //     axios
    //         .patch(`/api/blogs/${blog.id}`, editedBlog)
    //         .then((res) => {
    //             setRequestState("success");
    //             onClose();
    //         })
    //         .catch((err) => {
    //             unauthorizedHandler(err);
    //             onClose();
    //             toast({
    //                 title: "Something Went Wrong",
    //                 status: "error",
    //                 duration: 3000,
    //                 isClosable: true,
    //             });
    //             setRequestState("error");
    //         });
    // };
    return (
        <Box minH="15vh" minW="85vh" p={3}>

            <Center>
                <Flex border="1px" padding="50px" align="center" direction="column">
                    <Box >
                        <Heading>
                            {story.title}
                        </Heading>
                        <Box align="center" >
                            {new Date(story.postedAt).getUTCDay()}-
                            {new Date(story.postedAt).getUTCMonth()}-
                            {new Date(story.postedAt).getUTCFullYear()}
                        </Box>
                    </Box>
                    <Box >
                        {story.author}
                    </Box>
                    <Box >
                        {story.story}
                    </Box>
                </Flex>
            </Center>
        </Box>
    );

};

export default Story;
