import React from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { likePost, deletePost } from '../../../actions/posts';



const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    console.log("INFO POSTED:", post)

    return (
        <div>    
       

                    {/* Card */}
                        <div className=" max-w-md rounded-xl border-2 border-zinc-500 overflow-hidden shadow-xl bg-slate-800 text-zinc-100   ">
                            <img className="w-full" src={post.selectedFile} alt="/" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Title: {post.title}</div>
                                <div className="font-bold text-lg mb-2">By: {post.creator}</div>
                                <p className="text-slate-400 text-base">
                                    {post.message}
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2 ">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{post.tags.map((tag) => `#${tag.split(',')} `)}</span>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <p>{moment(post.createdAt).fromNow()}</p>
                            </div>
                            <div className='px-6 pt-4 pb-2 flex flex-row justify-between'>
                                <div className=' flex flex-row ' >
                                    <span style={{ fontWeight: 'bold' }}>{post.likeCount}:</span>

                                    <svg onClick={() => dispatch(likePost(post._id))} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="teal" className="w-6 h-6 cursor-pointer" title='likes'>
                                        <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                                    </svg>
                                </div>

                                <svg onClick={() => setCurrentId(post._id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="w-6 h-6 cursor-pointer" title='edit'>
                                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                                    <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                                </svg>

                                <svg onClick={() => dispatch(deletePost(post._id))} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-6 h-6 cursor-pointer" title='delete'>
                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                                </svg>

                            </div>
                        </div>
                  
              
           
                


        </div>


    )

}

export default Post