import React from 'react'
import "../components/Forms/style.css"
import { motion } from 'framer-motion';
const About = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
       <div className="services-container ">
    <h1 className='font-bold text-2xl mb-6 mt-8 text-gray-700'>Our Services</h1>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} className="service-list">
      <motion.div initial={{scale:0.97 }} whileHover={{scale:1, cursor:"pointer"}}  className="service-item">
        <h2 className="text-xl">Website Development</h2>
        <p>We build responsive, high-quality websites tailored to your business needs, ensuring a seamless user experience across all devices.</p>
      </motion.div>
      <motion.div initial={{scale:0.97 }} whileHover={{scale:1, cursor:"pointer"}}   className="service-item">
        <h2 className="text-xl">E-commerce Solutions</h2>
        <p>Our team delivers customized e-commerce platforms that drive sales and enhance customer engagement.</p>
      </motion.div>
      <motion.div initial={{scale:0.97 }} whileHover={{scale:1, cursor:"pointer"}}   className="service-item">
        <h2 className="text-xl">Web Application Development</h2>
        <p>From simple web apps to complex enterprise solutions, we create scalable and secure applications that meet your business objectives.</p>
      </motion.div>
      <motion.div initial={{scale:0.97 }} whileHover={{scale:1, cursor:"pointer"}}   className="service-item">
        <h2 className="text-xl">UI/UX Design</h2>
        <p>We focus on delivering user-centered designs that are both visually appealing and highly functional.</p>
      </motion.div>
      <motion.div initial={{scale:0.97 }} whileHover={{scale:1, cursor:"pointer"}}   className="service-item">
        <h2 className="text-xl">SEO & Digital Marketing</h2>
        <p>Our SEO and digital marketing services help improve your online presence, driving organic traffic and increasing visibility.</p>
      </motion.div>
      <motion.div initial={{scale:0.97 }} whileHover={{scale:1, cursor:"pointer"}}   className="service-item">
        <h2 className="text-xl">Maintenance & Support</h2>
        <p>We offer ongoing maintenance and support services to keep your website or application running smoothly.</p>
      </motion.div>
    </motion.div>
  </div>

    </div>
  )
}

export default About
