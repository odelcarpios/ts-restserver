import { DataTypes } from "sequelize";
import db from '../database/connection';

const crmcelina_customer = db.define("customer", {
  customer_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  dni: {
    type: DataTypes.STRING(12),
    allowNull: false,
  },
  names: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name_p: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name_m: {  
    type: DataTypes.STRING,
    allowNull: true,
  },
  dial_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthdate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  alias: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  home_phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  country_id: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: 'country',
      key: 'country_id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  },
  country_state_id: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: 'country_state',
      key: 'country_state_id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  },
  cesi_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  is_customer: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  creator_user_id: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: 'user',
      key: 'user_id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  },
},
{
  timestamps: true,
  underscored: true,
  tableName: 'customer',
  indexes: [],
},
);

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

  export default crmcelina_customer;