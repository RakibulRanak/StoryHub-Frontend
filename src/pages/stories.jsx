

import AllStory from "../components/story/allStory";
import Layout from "../components/generic/layout";
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