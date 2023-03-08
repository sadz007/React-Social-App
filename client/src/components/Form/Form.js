import React, { useState, useEffect } from 'react'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'

import { useNavigate} from 'react-router-dom'





const Form = ({ currentId, setCurrentId }) => {
    const dispatch = useDispatch()
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    const [postData, setPostData] = useState({
        title: '', message: '', tags: '', selectedFile: ''
    });

    const user = JSON.parse(localStorage.getItem('profile'));
    // console.log("USER IN FORM ", user)

    const navigate = useNavigate()



    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const clear = () => {
        setCurrentId(null);
        setPostData({ title: '', message: '', tags: '', selectedFile: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (currentId) {
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.first_name }));
            
            clear();
        } else {
            dispatch(createPost({ ...postData, name: user?.result?.first_name }));
            clear();
        }
        navigate('/main')
    };



    return (
        <div className='flex justify-center mt-24'>
            {/* {!user?.result?.email ?
            <div>
                <None/>
            </div>: */}

            <div className="w-full max-w-md" >
                <h1>Social Fun</h1>
                <form onSubmit={handleSubmit}
                    className="bg-teal-50
                shadow-xl rounded px-8 pt-6 pb-8 mb-4 ">
                    {/* <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Creator</label>
                        <input type="text" name="creator" value={postData.creator}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                    </div> */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                        <input type="text" name="title" value={postData.title}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                        <textarea type="text" name="message" value={postData.message}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">#Tags</label>
                        <input type="text" name="tags" value={postData.tags}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                    </div>
                    <div>
                        <FileBase
                            type='file'
                            multiple={false}
                            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}>

                        </FileBase>
                    </div>
                    <div className='mt-2 p-2 '>
                        
                        <button type="submit" className="w-full p-2  text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">Done</button>
                        {/* <p className='h-10 w-10 rounded-xl bottom-2 border-zinc-400 text-zinc-50'>EmptyPost</p> */}
                        {currentId?
                        <button onClick={clear} type="submit" className="w-full mt-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Clear</button>
                            :null}
                        </div>

                </form>
             
            </div>

        </div>

    )
}

export default Form