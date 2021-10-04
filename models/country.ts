import { DataTypes } from "sequelize";
import db from '../database/connection';

const crmcelina_country = db.define("country", {
    country_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,

    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    code: {
        type: DataTypes.STRING(3),
        allowNull: true,
    },

    dial_code: {
        type: DataTypes.STRING,
        allowNull: true,
    }
},
{
    timestamps: true,
    underscored: true,
    tableName: 'country',
    indexes: [],
    },   
);

export default crmcelina_country;