import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
   const navigate = useNavigate();
   const [form, setForm] = useState({
    name: '',
    propmt: '',
    photo: '',
   });
   const [generatingImg, setGeneratingImg] = useState(false);
   const [loading, setLoading] = useState(false);
  
    return (
    <section className=''>
     <div>
      
      </div>
    </section>    
    
  )
}

export default CreatePost;
