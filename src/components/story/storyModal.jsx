import { Box, Button, Input, useColorModeValue } from '@chakra-ui/react';
import { React, useContext, useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import ResizeTextarea from 'react-textarea-autosize';
import { StoryContext } from '../../context/storyContext';

const my_modal = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '50vw',
    minWidth: '300px',
    transform: 'translate(-50%, -50%)',
    padding: '12px',
    paddingBottom: '8px',
    zIndex: 1000,
    align: 'center',
    backdropFilter: 'blur(3px)',
};

const StoryModal = (props) => {
    const { postStories, updateStory } = useContext(StoryContext);
    const [title, setTitle] = useState(props.title);
    const [story, setStory] = useState(props.story);
    const [disable, setDisable] = useState(true);
    const color = useColorModeValue('gray.100', 'gray.600');
    const opColor = useColorModeValue('gray.500', 'gray.300');
    document.getElementById('root').style.filter = 'blur(3px)';

    useEffect(() => {
        if (story && story.trim() && title && title.trim()) setDisable(false);
        else setDisable(true);
    }, [story, title]);

    const handlePostSubmit = (e) => {
        e.preventDefault();
        props.close();
        setTitle('');
        setStory('');
        postStories({ title, story });
        setDisable(true);
    };
    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        props.close();
        updateStory({ title, story }, props.storyId);
    };

    return ReactDom.createPortal(
        <Box style={my_modal} bg={opColor} boxShadow="dark-lg">
            <form onSubmit={props.storyId ? handleUpdateSubmit : handlePostSubmit} pt={5}>
                <Input
                    name="title"
                    value={title}
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    bg={color}
                    placeholder="Title"
                />
                <Input
                    type="textarea"
                    value={story}
                    required
                    name="story"
                    onChange={(e) => setStory(e.target.value)}
                    bg={color}
                    minH="20vh"
                    maxH="70vh"
                    as={ResizeTextarea}
                    colorScheme="white"
                    placeholder="Story"
                />
                <Button type="submit" disabled={disable} colorScheme="green" size="sm">
                    {props.storyId ? 'UPDATE' : 'POST'}
                </Button>
                <Button size="sm" onClick={props.close} boxShadow="md" bg={color}>
                    Cancel
                </Button>
            </form>
        </Box>,
        document.getElementById('portal')
    );
};

export default StoryModal;
