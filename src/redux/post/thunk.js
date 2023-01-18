import {getPostFailureActionCreator, getPostReceiveActionCreator, getPostsRequestActionCreator} from "./actions";

const fetchPosts = () => async (dispatch) => {
    dispatch(getPostsRequestActionCreator())
    try {
        const req = await fetch ('https://jsonplaceholder.typicode.com/posts')
        const parseData = await req.json()
        setTimeout(() => {
            dispatch(getPostReceiveActionCreator(parseData))
        }, 2000)
    } catch (e) {
        dispatch(getPostFailureActionCreator(e))
    }
}

export default {
    fetchPosts
}