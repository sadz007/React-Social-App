import React,{useEffect,useState} from "react";
import './App.css';
import Form from "./components/Form/Form";
import Posts from "./components/Post/Posts";
import { useDispatch } from "react-redux";
import {getPosts} from './actions/posts'

function App() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getPosts())
},[currentId,dispatch])

  return (
    <div >
      <div
      className="bg-zinc-900 h-20 flex justify-center p-2">
        <h1 className="text-white text-5xl">Nav Bar</h1>
      </div>
      <div className="shadow-xl w-ful">
        <Form currentId={currentId} setCurrentId={setCurrentId}/>
      </div>
      <div>
        <Posts  setCurrentId={setCurrentId}/>
      </div>
    </div>
  );
}

export default App;
