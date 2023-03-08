import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation,Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LOGOUT } from '../../constant/actionType'
import decode from 'jwt-decode'
import {motion} from 'framer-motion'






const NavBar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    // console.log("USER USER: ",user )
    const [rotate, setRotate] = useState(false)


    const logout = () => {
        dispatch({ type: LOGOUT })
        navigate('/auth')
        setUser(null)
    }


    useEffect(() => {
        const token = user?.token;
        console.log("NAV BAR USER TOKKEN:",token)


        if (token) {

            const decodedToken = decode(token)

            if (decodedToken.exp * 1000 < new Date().getTime()) logout()
        }

        setUser(JSON.parse(localStorage.getItem('profile')))



    }, [location]);

    return (

        <div className='bg-teal-200 border-b-2 shadow-xl pt-4'>
            
            <motion.div 
            animate = {{ zoom:2 }}
            transition = {{ type:'tween', duration:2 }}
            className='flex items-center flex-col'>
                <h1 className='text-xl font-extrabold pb-2'>Social Moments </h1>
                {/* <h3 className='text-lg font-extrabold pb-2'>Share and create your memorable moments. </h3> */}
            </motion.div>
            
            <div className='flex justify-end m-2 p-2 gap-4 items-center'>
                <div>
                    <Link to="/" 
                    className=' w-auto mt-1 text-slate-200  focus:ring-1  font-sm rounded-lg text-sm px-4 py-1 text-center shadow-lg border-1  border-yellow-400 dark:bg-yellow-600 dark:hover:bg-yellow-500 dark:focus:ring-yellow-500'>
                        Home</Link>
                </div>
            {user?.result ? (
                <>
                <div className=' h-10 w-10 bg-white text-black rounded-full  border-green-100 border-2 shadow-xl flex items-center justify-around '>
                    <h1 className=' '>
                        {user?.result.first_name.charAt(0).toUpperCase()} {user?.result.last_name.charAt(0).toUpperCase()} </h1>
                </div>
                <h2 className=' font-semibold text-slate-900'> {user.result.first_name.toUpperCase()} </h2>
                <button onClick={logout} type="submit"
                    className="w-auto mt-1 text-slate-200  focus:ring-1  font-sm rounded-lg text-sm px-4 py-1 text-center shadow-lg  border-1 border-red-500 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >Log out</button>
                <Link to="/main">
                    <button type="submit" 
                        className=' w-auto mt-1 text-slate-200  focus:ring-1  font-sm rounded-lg text-sm px-4 py-1 text-center shadow-lg border-1  border-blue-400 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-500'>
                    Post</button>
                </Link>
                </>
            ):(
                
                <Link to ={'/auth'}> 
                <motion.div
                animate = {{rotate: rotate? 360 : 0}}
                >
                <button onClick={() => setRotate(!rotate)} className="w-auto mt-1 text-slate-200  focus:ring-1  font-sm rounded-lg text-sm px-4 py-1 text-center shadow-lg border-1  border-blue-400 dark:bg-sky-600 dark:hover:bg-sky-500 dark:focus:ring-sky-500">
                    Log in</button> 
                </motion.div>
                </Link>
            )} 
            
            </div>
            

        </div>
        

    )
}

export default NavBar