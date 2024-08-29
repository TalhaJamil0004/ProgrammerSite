import React from 'react'
import "../../output.css"
import { BsMenuButton } from 'react-icons/bs'
import ResponsiveMenu from "./ResponsiveMenu"
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    let [open , setOpen]= React.useState(false)
    function toggleOpen(){
        setOpen((previous)=>{
         const newVal = previous;
         return !newVal;
        })
    }
  return (
    <div className='flex justify-between items-center p-5 bg-slate-700 text-white'>
      <div className='mx-10'>
        {/* <img src='' alt=''></img> */}
        <h4>Remcosol</h4>
      </div>
      <div className=' hidden md:block'>
        <ul className='flex mx-10'>
            <NavLink to="/" className='mx-5 cursor-pointer'>Home</NavLink>
            <NavLink to="/about" className='mx-5 cursor-pointer'>About</NavLink>
            <NavLink to="/demoprojects" className='mx-5 cursor-pointer'>Demo Projects</NavLink>
        </ul>
        
      </div>

      <div className='block md:hidden mx-10 '>
        <BsMenuButton onClick={toggleOpen} className='cursor-pointer'/>
        <ResponsiveMenu open={open} toggleOpen={toggleOpen}/>
      </div>
    </div>
  )
}

export default Navbar
