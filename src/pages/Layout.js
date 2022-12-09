import React, { useState } from 'react';
import About from './About';
import Home from './Home';
import data from '../data';
import Form from './Form';




function Layout() {
  const [formData,setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [cardData,setCardData] = useState([]);
  return (
   <>
    <Home homeDatas = {data.homeData}/>
    
    <About aboutDatas = {data.aboutDatas} />

    <Form 
    formData={formData} 
    setFormData={setFormData}
    cardData={cardData}
    setCardData={setCardData}  
    />
    
   </>
  );
}

export default Layout;