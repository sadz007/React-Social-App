import * as api from '../api/index'
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constant/actionType';


// Create Action Creators
// 

// THUNK REDUX SYNTAX async (dispatch)

export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPosts()
        console.log("FETCH ALL ACTION DATA", data)
        dispatch({ type: FETCH_ALL, payload: data })

    }
    catch (error) {
        console.log(`ERROR ON GET POSTS: ${error}`)

    }
}
// CREATE FORM
export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        console.log("ACTION POST CREATE DATA", data);

        dispatch({ type: CREATE, payload: data })
        console.log("DISPATCHING CREATE DATA POSTED", { type: CREATE, payload: data })

    } catch (error) {
        console.log('ACTION CREATE ERROR::', error)
    }
}

// UPDATE POSTS
export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log("CAN NOT UPDATE::",  error);
    }
};

// LIKE POST
export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({ type: LIKE, payload: data });
    } catch (error) {
        console.log("Can Not Like" ,  error.message);
    }
};

// DELETE POST

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log("Can Not Delete ",error.message);
    }
};