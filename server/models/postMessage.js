import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,

    message: String,

    creator:String,

    tags:[String],
    
    selectedFile: String,
    // NAME OF THE PERSON LOGED IN .//
    name:String,
    
    likes:{
        type:[String],
        default: []
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
})

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage