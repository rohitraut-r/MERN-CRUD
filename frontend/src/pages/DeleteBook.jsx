import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Spinner from '../../components/Spinner'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const DeleteBook = () => {
  const [book, setbook] = useState([]);
  const [loading, setloading] = useState(false);
  const {id} = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    setloading(true);
   
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then((response)=>{
        navigate('/');
        setloading(false)
      })
    .catch((error)=>{
        console.log(error);
        setloading(false);
    })
  }, [])
  return (
    <div></div>
  )
}

export default DeleteBook