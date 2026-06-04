import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const User = db.define(
    "users",
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        name:{
            type: DataTypes.STRING,
            allowNull: false
        },

        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },

        role:{
            type: DataTypes.ENUM('admin','user'),
            allowNull: false,
            defaultValue: "user"
        }
    },

    {
        freezeTableName: true,
    }
)

export default User