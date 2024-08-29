import React from 'react';
import "../components/Forms/style.css"
import CardInfo from "./Cards/returnCardData"
import { motion } from 'framer-motion';
const Home = () => {
  return (

    <div>
   <div className='main'>
      
       <h1 className='text-3xl font-bold mb-6 text-gray-700'>Programmers From World</h1>
       <p className='text-lg'>"Join our dynamic team and turn your coding skills into impactful solutions—apply now and shape the future with us!"</p>
    </div>
    <CardInfo/>

  </div>
  );
}

export default Home;
