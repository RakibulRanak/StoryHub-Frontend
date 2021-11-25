

import Layout from "../components/generic/layout";
import AllStory from "../components/story/allStory";
import { StoryProvider } from "../context/storyContext";

const Stories = () => {
    return (
        <StoryProvider>
            <Layout>
                <AllStory />
            </Layout>
        </StoryProvider>
    );
};

export default Stories;