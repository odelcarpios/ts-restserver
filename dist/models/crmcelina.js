"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const crmcelina_country = connection_1.default.define("country", {
    country_id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    code: {
        type: sequelize_1.DataTypes.STRING(3),
        allowNull: true,
    },
    dial_code: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    }
}, {
    timestamps: true,
    underscored: true,
    tableName: 'country',
    indexes: [],
});
exports.default = crmcelina_country;
//# sourceMappingURL=crmcelina.js.map