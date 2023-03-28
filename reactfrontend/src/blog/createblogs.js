import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const holi = 'http://localhost:8000/'

const CompCreateBlog = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const navigate = useNavigate()

  // guardar procedimiento
  const store = async (e) => {
    e.preventDefault();
    await axios.post(holi, {title: title, content:content})
    navigate('/')
  }

   return (
    <div>
        <h6>Crear vistas</h6>
    </div>
   ) 
}

export default CompCreateBlog