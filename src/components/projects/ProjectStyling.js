import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
const ProjectStyling = (props) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <motion.div initial={{x:-100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1}} viewport={{once:true}} className='md:flex md:flex-row flex flex-col justify-around items-center border-2 border-gray-700 rounded-md p-4 m-8 w-[48vw]'>
        <img src={props.imgsrc} alt='' className='w-[180px] h-[140px] px-2'></img>
        <div className='md:w-1/2 md:text-justify w-52 px-4 text-center my-4'>
            <h2 className='font-bold md:mb-2'>{props.heading}</h2>
            <p>{props.paragraph}</p>
            <NavLink to="/weatherform">
              <motion.button whileHover={{scaleX:1.1, }} className="bg-green-600 text-white mt-2 p-1 border-none rounded w-[175px] h-10 text-xs cursor-pointer hover:bg-green-700">Try Now</motion.button>
            </NavLink>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectStyling
 