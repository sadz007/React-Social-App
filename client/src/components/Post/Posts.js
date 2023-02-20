import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux'
// import { Audio } from 'react-loader-spinner'


const Posts = ({setCurrentId}) => {
    const posts = useSelector((state)=>state.posts)
    // console.log("POSTS POSTS:", posts)

    return (
      <div  className='flex justify-center space-x-3'>
        {posts.map((post,id)=>(
                <div key={id}  >
                    <Post post={post} setCurrentId={setCurrentId} />
                </div>
                

            )
        )}

          
      </div>
    )

}


export default Posts