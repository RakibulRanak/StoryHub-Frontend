import { Flex, Button, Input } from "@chakra-ui/react";
import { useContext, useState, React, useEffect } from "react";
import ResizeTextarea from "react-textarea-autosize";
import { StoryContext } from "../../context/storyContext";
import ReactDom from 'react-dom'


const my_modal = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '47vw',
    minWidth: "300px",
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '30px',
    paddingBottom: "20px",
    zIndex: 1000,
    align: "center",
    backgroundColor: 'rgba(0, 0, 0, .7)',
    backdropFilter: 'blur(8px)',
}

const StoryModal = (props) => {
    const { postStories, updateStory } = useContext(StoryContext)
    const [title, setTitle] = useState(props.title)
    const [story, setStory] = useState(props.story)
    const [disable, setDisable] = useState(true)
    document.getElementById('root').style.filter = 'blur(3px)'

    useEffect(() => {
        if (story && story.trim() && title && title.trim())
            setDisable(false);
        else
            setDisable(true);
    }, [story, title]);

    const handlePostSubmit = (e) => {
        e.preventDefault();
        props.close()
        setTitle("");
        setStory("");
        postStories({ title, story })
        setDisable(true)
    }
    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        props.close()
        updateStory({ title, story }, props.storyId)
    }

    return ReactDom.createPortal(
        <div style={my_modal}>
            <form onSubmit={props.storyId ? handleUpdateSubmit : handlePostSubmit} pt={10}>
                <Input name="title" value={title} required onChange={(e) => setTitle(e.target.value)} bg="white" placeholder="Title" />
                <Input type="textarea" value={story} required name="story" onChange={(e) => setStory(e.target.value)} bg="white" minH="20vh" maxH="70vh" as={ResizeTextarea}
                    colorScheme="white" placeholder="Story" />
                <Button type="submit" disabled={disable} colorScheme="teal" size="sm">{props.storyId ? "UPDATE" : "POST"}</Button>
                <Button size="sm" onClick={props.close}>Cancel</Button>
            </form>
        </div >,
        document.getElementById('portal')
    )
}

export default StoryModal;