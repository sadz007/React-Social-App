import React , {useState} from 'react'
import None from '../None/None';
import {motion} from 'framer-motion'

const Home = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    




    // if(!user?.result?.email) {
    //     // console.log('RESULTS:::', user.result.name)
    //     return(
    //         <None/>
    //     )

    // }

    return (
        <div>
        {!user?.result?.email ?
            <motion.div 
            // animate = {{zoom: move? 0: -5 }} 
            
            // // initial ={{scale:0}}
            // transition = {{ delay:2 }}
            // onClick = {()=> setMove(!move)}
            >
            <None/> 
            </motion.div>
        :null
        }
            {/* <motion.div animate= {{ x: move ? 200 :-200}} transition = {{ delay:3}}
            onClick = {()=> setMove(!move)}
            className=' bg-cyan-600 h-10 w-20 rounded-full border-2 border-black shadow-xl m-11' >
                <h2>Motion</h2>
                
            </motion.div> */}
        </div>
    )
}

export default Home