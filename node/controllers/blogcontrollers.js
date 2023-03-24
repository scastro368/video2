// importamos el modelo
import Blogmodel from "../models/blogmodels.js";

// metodos para el crud //

//mostrar todos los registros
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blogmodel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json({error: error.message})
    }
}
//mostrar un registro
export const getBlog = async (req, res) => {
    try {
     const blog = await Blogmodel.findAll({
            where:{id: req.params.id }
        })
        res.json(blog)
    } catch (error) {
        res.json({error: error.message})
    }
}
//crear un registro 
export const createBlog = async (req, res) => {
    try {
        await Blogmodel.create(req.body)
        res.json({
            "message": "!Registro creado exitosamente¡"
        })
    } catch (error) {
        res.json({error: error.message})
    }
}
//actualizar un registro 
export const updateBlog = async (req, res) => {
    try {
        await Blogmodel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message": "!Registro actualizado exitosamente¡"
        })
    } catch (error) {
        res.json({error: error.message})
    }
}
//eliminar un registro 
export const deleteBlog = async (req, res) => {
    try {
        await Blogmodel.destroy(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message": "!Registro eliminado exitosamente¡"
        })
    } catch (error) {
        res.json({error: error.message})
    }
}