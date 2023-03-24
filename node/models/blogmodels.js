// importar la conexion a la db
import db from "../database/db.js";

import { DataTypes } from "sequelize";

const Blogmodel = db.define('blogs',{
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
})

export default Blogmodel