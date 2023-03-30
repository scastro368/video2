import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const holi = 'http://localhost:8000/blogs/'

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
        <h3>Crear post</h3>
        <form onSubmit={store}>
            <div className="mb-3">
               <label className="form-label">Title</label>
               <imput
                 value={title}
                 onChange={ (e)=> setTitle(e.target.value)}
                 type="text"
                 className="form-control"
               />
                 </div>
                 <div className="mb-3">
                    <label className="form-label">Title</label>
                    <textarea
                      value={content}
                      onChange={ (e)=> setContent(e.target.value)}
                      type="text"
                      className="form-control"
                   />
               </div>    
                <button type="submit" className="btn btn-primary">Store</button>
        </form>
    </div>
   ) 
}

export default CompCreateBlog