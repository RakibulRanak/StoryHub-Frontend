import StoryView from "../components/story/storyView";
import Layout from "../components/generic/layout";
import { StoryProvider } from "../context/storyContext";

const Story = () => {
    return (
        <StoryProvider>
            <Layout>
                <StoryView />
            </Layout>
        </StoryProvider>
    );
};

export default Story;