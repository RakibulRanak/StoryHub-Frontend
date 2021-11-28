import Layout from '../components/generic/layout';
import AllStory from '../components/story/allStory';
import { StoryProvider } from '../context/storyContext';

const Stories = () => (
    <StoryProvider>
        <Layout>
            <AllStory />
        </Layout>
    </StoryProvider>
);

export default Stories;
