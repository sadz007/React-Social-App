import React, { useEffect,useState } from 'react'
import { useDispatch } from "react-redux";
import { getPosts } from '../../actions/posts'
import Form from "../Form/Form";
import NavBar from '../NavBar/NavBar';
import Posts from "../Post/Posts";
// import { useNavigate } from 'react-router-dom';

const Main = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch()
    // const navigate = useNavigate()

    useEffect(() => {
        dispatch(getPosts())
        // navigate('/')
    }, [currentId, dispatch])




    return (
        <div>
            <div className="shadow-xl w-ful">
                <NavBar/>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
            </div>
            <div>
                <Posts setCurrentId={setCurrentId} />
            </div>
        </div>
    )
}

export default Main