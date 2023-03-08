import * as api from '../api/index'
import { AUTH } from '../constant/actionType';
// import {useNavigate} from 'react-router-dom';



export const signIn = (formData)=> async(dispatch) => {
    // const navigate = useNavigate()
    try {
        // login in user
        const {data} = await api.signIn(formData)

        dispatch({ type: AUTH, data })
        
        // router.push('/')

    } catch (error) {
        console.log(error)
        
    }

}

export const signUp = (formData)=> async(dispatch) => {
    // const navigate = useNavigate()
    try {
        // Register the  user
        const {data} = await api.signUp(formData)

        dispatch({ type: AUTH, data})
        
        // router.push('/')

    } catch (error) {
        console.log("SIGN UP ERROR",error)
        
    }

}