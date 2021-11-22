import { Box } from "@chakra-ui/react";
import React from "react";

const Layout = (props) => {
    return (
        <Box bg="gray.100" h="100%" minH="100vh" pl="20%" pr="20%">
            {props.children}
        </Box>
    );
};

export default Layout;
