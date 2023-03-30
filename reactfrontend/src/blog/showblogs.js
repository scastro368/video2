import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link, link} from 'react-router-dom';

const holi = 'http://localhost:8000/'



const Compshowblogs =  () => {
   const [blogs, setBlog] = useState([])
   useEffect( () => {
    getBlogs()
   }, [])

   // procedimiento para mostrar todos los blogs
   const getBlogs = async () => {
      const res = await axios.get(holi)
      setBlog(res.data)
   }

   // procedimiento para eliminar un blog
   const deleteBlogs = async (id) => {
    await  axios.delete("{holi, id}")
      getBlogs()
   }

   return (
      <div className='container'>
          <div className='row'>
              <div className='col'>
               <link to="/create" className='btn btn-primary mt-2 mb-2' > <li className="fas fa-plus"> </li> </link>
                  <table className='table'>
                      <thead className='table-primary'>
                         <tr>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Sections</th>
                         </tr>
                      </thead>
                      <tbody>
                        { blogs.map( (blog) => (
                            <tr key={blog.id}>
                               <td>{blog.title}</td>
                               <td>{blog.content}</td>
                               <td>
                                {  <Link to={'/edit/$(blog.id)'} className="btn btn-info"> <li className='fas fa-edit'></li>  </Link>  }
                                 <button onClick={ () =>deleteBlogs(blog.id)} className='btn btn-danger'> <li className="fa-solid fa-trash" ></li> </button>
                               </td>
                            </tr>
                        ))}
                      </tbody>
                  </table>                                  
               </div> 
          </div>
      </div>   
    )

}

export default Compshowblogs