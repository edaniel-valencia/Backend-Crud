import { Sequelize } from "sequelize";


const sequelize = new Sequelize('curso-free', 'root', '1004-TSE',{
    host: 'localhost',
    dialect: 'mysql'
})

export default sequelize