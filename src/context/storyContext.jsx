import axios from "axios";
import { useHistory } from "react-router-dom";
const { createContext, useState } = require("react");
const StoryContext = createContext();


const StoryProvider = (props) => {
    const history = useHistory();
    const [stories, setStories] = useState([])
    const [storiesLoading, setStoriesLoading] = useState(true);
    const [singleStory, setSingleStory] = useState([]);
    const [storyLoading, setStoryLoading] = useState(true);


    const getStories = () => {
        axios
            .get("/api/v1/stories")
            .then((res) => {
                setStories(res.data.data);
                setStoriesLoading(false)
            })
            .catch((err) => console.log(err));
    };
    const getSingleStory = (id) => {
        axios
            .get(`/api/v1/stories/${id}`)
            .then((res) => {
                setSingleStory(res.data.data)
                setStoryLoading(false)
            })
            .catch((err) => { console.log(err) });
    };

    const postStories = (story) => {
        console.log(story)
        axios
            .post("/api/v1/stories", story)
            .then((res) => {
                getStories()
            })
            .catch((err) => console.log(err));

    };

    const updateStory = (story, id) => {
        axios
            .put(`/api/v1/stories/${id}`, story)
            .then((res) => {
                getStories()
                setSingleStory(res.data.data)
            })
            .catch((err) => console.log(err));

    };
    const deleteStory = (id) => {
        axios
            .delete(`/api/v1/stories/${id}`)
            .then((res) => {
                getStories()
                history.push('/')

            })
            .catch((err) => console.log(err));

    };
    return (
        <StoryContext.Provider
            value={{ getStories, stories, storiesLoading, postStories, updateStory, deleteStory, singleStory, getSingleStory, storyLoading }}
        >
            {props.children}
        </StoryContext.Provider>
    );

};

export { StoryContext, StoryProvider };
