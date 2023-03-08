import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000' })

API.interceptors.request.use((req) => {
    // get request as  params//
    if (localStorage.getItem('profile')) {
        // brearer Token ../
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});


export const fetchPosts = () => API.get('/posts')

export const createPost = (newPost) => API.post('/posts', newPost)

export const likePost = (id) => API.patch(`${'/posts'}/${id}/likePost`);

export const updatePost = (id, updatedPost) => API.patch(`${'/posts'}/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`${'/posts'}/${id}`);

// SIGN IN AND SIG ROUTES

export const signIn = (formData) => API.post('/user/signin', formData)
export const signUp = (formData) => API.post('/user/signup', formData)