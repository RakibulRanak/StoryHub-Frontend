import { Flex, Button, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import ResizeTextarea from "react-textarea-autosize";
import { StoryContext } from "../../context/storyContext";
import { Modal } from "react-bootstrap";


const StoryModal = (props) => {
    const { postStories, updateStory } = useContext(StoryContext)
    const [title, setTitle] = useState(props.title)
    const [story, setStory] = useState(props.story)

    const handlePostSubmit = (e) => {
        //this.setState({ value: "" })
        e.preventDefault();
        props.close()
        setTitle("");
        setStory("");
        postStories({ title, story })
    }
    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        props.close()
        updateStory({ title, story }, props.storyId)
    }
    return (
        <Flex direction="column" pt={10} w="100%">
            <Modal show={props.show} cancel={props.close} >
                <Modal.Header >
                    <Modal.Title id="contained-modal-title-vcenter">{props.storyId ? "Update story" : "Post your story"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={props.storyId ? handleUpdateSubmit : handlePostSubmit} pt={10}>
                        <Input name="title" value={title} required onChange={(e) => setTitle(e.target.value)} bg="white" placeholder="Title" />
                        <Input type="textarea" value={story} required name="story" onChange={(e) => setStory(e.target.value)} bg="white" minH="20" as={ResizeTextarea}
                            overflow="hidden" colorScheme="white" placeholder="Story" />
                        <Button type="submit" colorScheme="teal" size="sm">{props.storyId ? "UPDATE" : "POST"}</Button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.close}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </Flex>
    )
}

export default StoryModal;