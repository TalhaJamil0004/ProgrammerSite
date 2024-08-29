import React from 'react'
import "../../output.css"
import {motion, AnimatePresence} from "framer-motion"
import { NavLink } from 'react-router-dom'
const Responsivemenu =(props) => {
  return (
    <div>
      <AnimatePresence mode='wait'>
        {
            props.open && (
                <motion.div 
                initial={{opacity:0,y:-100}}
                animate={{opacity:1, y:0}}
                exit={{opacity:0 , y:-100}}
                transition={{duration:0.3}}
                className='absolute top-12 left-0  w-full h-screen z-20'>
                    <div className='bg-slate-700 text-white font-semibold py-10 m-6 rounded-3xl'>
                        <ul className=' flex flex-col items-center gap-8'>
                            <NavLink to="/" >
                            <motion.li whileHover={{scale:1.3}}  className='cursor-pointer'onClick={props.toggleOpen}> Home</motion.li>
                            </NavLink>
                            <NavLink to="/about">
                             <motion.li whileHover={{scale:1.3}} className='cursor-pointer'onClick={props.toggleOpen}>About </motion.li>
                             </NavLink>
                            <NavLink to="/demoprojects">
                             <motion.li whileHover={{scale:1.3}} className='cursor-pointer'onClick={props.toggleOpen}>Demo Projects</motion.li>
                             </NavLink> 
                        </ul>
                    </div>
                </motion.div>
               
            )
        }
        
      </AnimatePresence>
    </div>
  )
} 

export default Responsivemenu
