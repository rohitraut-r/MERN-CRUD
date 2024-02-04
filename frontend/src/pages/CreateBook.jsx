import React, { useState } from 'react'
import axios from 'axios';
import Spinner from '../../components/Spinner';
import { useNavigate } from 'react-router-dom';
const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreate = () => {
    const data = {
      title,
      author,
      publishYear
    }

    
    axios
      .post('http://localhost:5555/books', data)
      .then((response)=>{
        setLoading(false);
        navigate('/');
      })
      .catch((error)=>{
        console.log(error.message);
        setLoading(true);
      })
  }

  
  return (
    <div className='p-4'>
      <div className="flex flex-col items-center ">
        <span>Add New Book</span>
        <div className="p-4 w-[400px] border-2 border-slate-800 rounded-md">
          <div> Title</div>
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className='border-2 border-slate-500 rounded-sm w-full'/>
          <div> Author</div>
          <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} className='border-2 border-slate-500 rounded-sm w-full'/>
          <div> Publish Year</div>
          <input type="number" value={publishYear} onChange={(e)=>setPublishYear(e.target.value)} className='border-2 border-slate-500 rounded-sm w-full'/>
          <button className='w-full bg-sky-600 mt-7 text-white rounded-md hover:bg-sky-700 transition duration-200' onClick={handleCreate}>Save</button>
        </div>
        
      </div>
    </div>
  )
}

export default CreateBook