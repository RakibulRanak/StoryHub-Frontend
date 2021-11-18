
import { Link } from "react-router-dom";
import Stories from "../components/story/stories";
import Layout from "../components/generic/layout";
import { StoryProvider } from "../context/storyContext";

const Story = () => {
    return (
        <StoryProvider>
            <Layout>
                <Stories />

            </Layout>
        </StoryProvider>
    );
};

export default Story;