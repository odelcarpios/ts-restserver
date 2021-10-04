"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const crmcelina_customer = connection_1.default.define("customer", {
    customer_id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    dni: {
        type: sequelize_1.DataTypes.STRING(12),
        allowNull: false,
    },
    names: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    last_name_p: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    last_name_m: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    dial_code: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    birthdate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    alias: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true,
    },
    home_phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    country_id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'country',
            key: 'country_id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
    },
    country_state_id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'country_state',
            key: 'country_state_id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
    },
    cesi_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    is_customer: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    creator_user_id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'user',
            key: 'user_id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
    },
}, {
    timestamps: true,
    underscored: true,
    tableName: 'customer',
    indexes: [],
});
/*
  Customer.associate = models => {
    Customer.belongsTo(models.Country, {
      foreignKey: 'country_id',
      targetKey: 'country_id',
      as: 'country',
    });
    Customer.belongsTo(models.CountryState, {
      foreignKey: 'country_state_id',
      targetKey: 'country_state_id',
      as: 'country_state',
    });
    Customer.belongsToMany(models.ReferencialQuestion, {
      through: 'customer_referencial_question',
      as: 'questions',
      foreignKey: 'customer_id'
    });
    Customer.hasMany(models.CustomerActivity, {
      foreignKey: 'customer_id',
      sourceKey: 'customer_id',
      as: 'customer_activity',
    });
    Customer.hasMany(models.Prospect, {
      foreignKey: 'customer_id',
      sourceKey: 'customer_id',
      as: 'prospect',
    });
  };

  return crmcelina_customer;
};*/
exports.default = crmcelina_customer;
//# sourceMappingURL=customer.js.map