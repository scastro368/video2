import {Sequelize} from "sequelize";

const db = new Sequelize('app_react','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db