import { Sequelize } from "sequelize";
import Db from "../config/database.js";
const {DataTypes} = Sequelize;

const User = Db.define('penitipan', {
    nama_penitipan: DataTypes.STRING,
    nama_pemilik: DataTypes.STRING,
    alamat: DataTypes.STRING,
    no_hp: DataTypes.INTEGER,
    pelayanan: DataTypes.STRING
},{
    freezeTableName:true
});

export default User;

(async()=> {
    await Db.sync();
})();