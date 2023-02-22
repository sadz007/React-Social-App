import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux'
import Loader from '../../react-loading/Loader'



const Posts = ({setCurrentId}) => {
    const posts = useSelector((state)=>state.posts)

    return (
      !posts.length?<Loader/>:(
      <div  className='flex justify-center space-x-3 mb-10'>
        {posts.map((post,id)=>(
                <div key={id}  >
                    <Post post={post} setCurrentId={setCurrentId} />
                </div>
            ))}
      </div>
    )
    )

}


export default Posts