import Layout from '../components/generic/layout';
import StoryView from '../components/story/storyView';
import { StoryProvider } from '../context/storyContext';

const Story = () => (
    <StoryProvider>
        <Layout>
            <StoryView />
        </Layout>
    </StoryProvider>
);

export default Story;
