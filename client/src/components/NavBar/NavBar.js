import React from 'react'
import { useNavigate } from 'react-router-dom'






const NavBar = () => {
    const navigate = useNavigate()

    const user = null

    return (

        <div>
            NavBar....
            <div>
                {user? (
                    <div>
                    <p>User Loged In</p>
                    {/* LINK to '/' main page */}
                    <button onClick={()=>{}}>Log Out</button>
                    </div>
                ):(
                    <button onClick={()=>navigate('/auth')} className='border-2 p-1 border-black bg-blue-400'>Log In</button>
                    // Link to "/" /auth /// 
                )
                }
            </div>
        </div>
    )
}

export default NavBar