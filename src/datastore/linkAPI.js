import _ from "lodash";
import axios from 'axios';

export const addComment = async (author, title, content) => {
    const resp = await axios.post('/api/comments', {author: author, title: title, content: content});
    return resp.data;
}

export const getComment = async (id) =>{
    const resp = await axios.get('/api/comments/${id}');
    return resp.data;
}

export const getAllComments = async() => {
    const resp = await axios.get('/api/comments');
    return resp.data;
};

export const updateComment = async (title, content) =>{
    const resp = await axios.put('/api/comments/${id}', {title: title, content: content})
    return resp.data;
}

export const deleteComment = async (id) => {
    const resp = await axios.delete('/api/comments/${id}');
    return resp.data;
}
