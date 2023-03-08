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
    // entire post {title,message, selectedFile,creator, tags}
    const post = req.body
    console.log("CREATED POST>>>>>:", post)

    const newPost = new PostMessage(
        {...post, creator: req.userId, createdAt: new Date().toISOString()}
        )
    // console.log("NEW POST CREATED::=>",newPost)
    try{
        await newPost.save()
        res.status(201).json(newPost)
        // console.log("CONTROLLER=>>NEW POST",newPost)

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

    if (!req.userId) return res.json({ message: "Not Authorized"});

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);

    // user id is in Like or not "Check" for specific user ///
    
    const index = post.likes.findIndex((id)=> id === String(req.userId))

    if(index === -1){
        // like the post
        post.likes.push(req.userId)

    }else{
        // dislike the post
        post.likes = post.likes.filter((id) => id !== String(req.userId));

    }

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
        new: true,
        runValidators:true });
    
    res.json(updatedPost);
}

export default router;