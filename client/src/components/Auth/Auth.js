import React, { useState } from 'react'
import  {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom';
import {signIn,signUp} from '../../actions/auth'



const initialState = {first_name: "", last_name: "", email: "", password: "", repeat_password: ""}

const Auth = () => {

    const [formData,setFormData] = useState({initialState})

    const dispatch = useDispatch()
    const navigate = useNavigate()



    // const [showPassword,setShowPassword] = useState(false)

    const [isSignUp,setIsSignUp] = useState(false)
    

    const handleSubmit = (e) => {
        e.preventDefault()
        if(isSignUp){
            dispatch(signUp(formData))
        
            
        }else{
            dispatch(signIn(formData))
        }
        navigate('/main')
        console.log(formData)

    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value })


    }

    // const handleShowPassword= () => setShowPassword ((prevShowPassword)=> !prevShowPassword)

    const switchMode = () => {
        setIsSignUp((prevIsSignUp)=> !prevIsSignUp)
        // handleShowPassword(false)

    }
    


    return (
        <div className='p-5 flex justify-center'>
            <div className='flex-col items-center '>

                <form className='bg-zinc-300 p-24 rounded-2xl shadow-2xl'onSubmit={handleSubmit}>
                    {isSignUp?
                    <>
                    <div className='mb-8'>
                        <h1><strong>Sign Up</strong></h1>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input  onChange={handleChange} type="text" name="first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="first_name" 
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >First name</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input  onChange={handleChange} type="text" name="last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="last_name" 
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >Last name</label>
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input  onChange={handleChange} type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="email" 
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Email address</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input  onChange={handleChange} type='text' name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="password" 
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Password</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input  onChange={handleChange} type="text" name="repeat_password" id="repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="repeat_password" 
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Confirm password</label>
                    </div>
                    <button type="submit" 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-500 dark:focus:ring-sky-800"
                    >Sign up</button>
                    </>
                    :
                    <>
                    <div className='mb-8'>
                        <h1><strong>Sign In</strong></h1>
                    </div>
                    
                    

                    
                        <div className="relative z-0 w-full mb-6 group">
                            <input  onChange={handleChange} type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="email" 
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >Email address</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input  onChange={handleChange}  type="text" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="password" 
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >Password</label>
                        </div>
                        <button type="submit" 
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-500 dark:focus:ring-sky-800">Sign in</button>
                  
                    </>
                    }
                
                
                </form>
                <div className='flex items-center justify-center mt-5'>
                    <button onClick={switchMode}
                    type="submit" className="text-white bg-green-50 focus:outline-none focus:ring-green-100 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-400 dark:hover:bg-cyan-600 dark:focus:ring-cyan-300">
                    {isSignUp? <p><strong>Already have Account ? Sign In</strong></p>
                    :<p><strong>Want to Join ? Sign Up</strong></p>}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Auth


//  {/* <div className="grid md:grid-cols-2 md:gap-6">
//                         <div className="relative z-0 w-full mb-6 group">
//                             <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//                             <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
//                         </div>
//                         <div className="relative z-0 w-full mb-6 group">
//                             <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//                             <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
//                         </div>
//                     </div> */}