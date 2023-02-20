import React, { useState,useEffect } from 'react'
import FileBase from 'react-file-base64'
import {useDispatch,useSelector } from 'react-redux'
import {createPost,updatePost} from '../../actions/posts'





const Form = ({currentId, setCurrentId}) => {
    const dispatch = useDispatch()
    const post = useSelector(
        (state)=> currentId ? state.posts.find((p)=> p._id === currentId):null
        );
    
    

    const [postData,setPostData] = useState({ 
        creator: '', title: '', message: '', tags: '', selectedFile: ''
        });

    useEffect (()=>{
        if(post) setPostData(post)
        console.log("USE EFFECT POST", post)

    },[post])


    const handleSubmit = async (e)=>{
        e.preventDefault();
        if( currentId){
            dispatch(updatePost(currentId, postData));
            
            
        }else{
            dispatch(createPost(postData));

        }
        clear();
        
    }

    const clear = () =>{
        setCurrentId(null)
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    
    }


    return (
        <div className='flex justify-center mt-24'>
        
            <div className="w-full max-w-md " >
            <h1>Social Fun</h1>
                <form onSubmit={handleSubmit} 
                className="bg-teal-50
                shadow-xl rounded px-8 pt-6 pb-8 mb-4 ">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Creator</label>
                        <input type="text" name="creator" value={postData.creator}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange = {(e)=>setPostData({ ...postData, creator: e.target.value})}/>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                        <input type="text" name="title" value={postData.title}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange = {(e)=>setPostData({ ...postData, title: e.target.value})} />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                        <textarea type="text" name="message" value={postData.message}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        onChange = {(e)=>setPostData({ ...postData, message: e.target.value})}/>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Tags:#</label>
                        <input type="text" name="tags" value={postData.tags}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange = {(e)=>setPostData({ ...postData, tags: e.target.value.split(',') })}/>
                    </div>
                    <div>
                        <FileBase
                        type='file'
                        multiple={false}
                        onDone={({base64})=>setPostData({...postData, selectedFile:base64 })}>
                        
                        </FileBase>
                    </div>
                    <div className='mt-2 p-2 '>
                    <button type="submit" className="w-full p-2  text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">Done</button>
                    <button onClick={clear} type="submit" className="w-full mt-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Clear</button>
                    </div>

                </form>   
            </div>
        </div>
           

    )
}

export default Form