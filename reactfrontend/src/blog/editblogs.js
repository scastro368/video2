import axios from "axios";
import {useState, useEffect} from "react";
import {useNavigate,useParams} from "react-router-dom";
import '../App.css';

const holi = 'http://localhost:8000/blogs/'

const ComEditBlogs = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()
    const id = useParams()

    // para actualizar
    const update = async (e) => {
        e.preventDefault();
        await axios.put(holi+IdleDeadline, {
            title: title,
            content: content
        })
        navigate('/')
    }
    useEffect( () => {
        getBlogByid()
    },)

    const getBlogByid = async () => {
      const res =  await axios.get(holi + id)
      setTitle(res.data.title)
      setContent(res.data.content)
    }

    return (
        <div>
          <h3>Edit post</h3>
           <form onSubmit={update}>
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
                <button type="submit" className="btn btn-primary">update</button>
        </form>
    </div>
    )

}

export default ComEditBlogs