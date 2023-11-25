import { Sequelize } from "sequelize";

const Db = new Sequelize('opets_db', 'root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default Db;