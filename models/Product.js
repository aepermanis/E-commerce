// import important parts of sequelize library
const { Model, DataTypes, INTEGER, STRING } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    product_name: {
      type: DataTypes.STRING,
      allownull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allownull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allownull: true
    },
    category_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
        key: 'id'
      }
    } 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
