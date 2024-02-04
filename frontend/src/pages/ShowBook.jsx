import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Spinner from '../../components/Spinner'
import { useParams } from 'react-router-dom';

const ShowBook = () => {
  const [book, setbook] = useState([]);
  const [loading, setloading] = useState(false);
  const {id} = useParams();
  useEffect(() => {
    setloading(true);
   
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response)=>{
        setbook(response.data.book)
        setloading(false)
      })
    .catch((error)=>{
        console.log(error);
        setloading(false);
    })
  }, [])
  
console.log(book);
  return (

  
    <div className='flex justify-center flex-col items-center h-screen '>
      {loading ? (
        <Spinner/>
      ):(
        <>
        <span className='text-3xl mb-5'>Book Information</span>
        <div className='border-2 border-slate-500 w-[500px] rounded-md p-4'>
          <div className='text-2xl'>Title: {book.title}</div>
          <div className='text-2xl' >Author: {book.author}</div>
          <div className='text-2xl'>Publish Year: {book.publishYear}</div>
          <div className='text-2xl'>Added Date: {book.createdAt}</div>

        </div>
        </>
      )}
     
    </div>
  )
}

export default ShowBook