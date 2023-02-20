import PostMessage from "../models/postMessage.js";
import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

export const getPosts = async (req, res) =>{
    try{
        const postMessages = await PostMessage.find()

        console.log("CONTROLLER_>PostMessages:", postMessages)

        res.status(200).json(postMessages)


    }catch(error){
        res.status(404).json("GET POST ERROR",{ message: error.message })
    }

}

export const createPost = async (req, res) => {
    const {title,message, selectedFile,creator, tags} = req.body

    const newPost = new PostMessage({title,message, selectedFile,creator, tags})
    console.log("NEW POST CREATED::=>",newPost)
    try{
        await newPost.save()
        res.status(201).json(newPost)
        console.log("CONTROLLER=>>NEW POST",newPost)

    }
    catch (error){ 
        res.status(409).json("CREATE POST ERROR",{  message: error.message })

    }
    
}

export const updatePost= async(req,res) =>{
    const {id:_id} = req.params
    const post = req.body

    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No post with Id');
    
    const updatedPost = await PostMessage.findByIdAndUpdate(_id,{...post,_id} ,{
            new:true,
            runValidators:true,
        })
    res.json(updatedPost)
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, {
        new: true,
        runValidators:true });
    
    res.json(updatedPost);
}
