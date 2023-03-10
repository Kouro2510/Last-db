'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

            Order.hasMany(models.ProductOrder, {
                foreignKey: 'orderId',
            });
            Order.belongsTo(models.User,{
                foreignKey: 'userId'
            });
            Order.hasMany(models.Product,{
                foreignKey: 'productId'
            })
        }
    }
    Order.init(
        {
            order_number: DataTypes.STRING,
            sub_total: DataTypes.INTEGER,
            coupon: DataTypes.STRING,
            quantity: DataTypes.INTEGER,
            lastName: DataTypes.STRING,
            firstName: DataTypes.STRING,
            address: DataTypes.STRING,
            phonenumber: DataTypes.STRING,
            email: DataTypes.STRING,
            note: DataTypes.STRING,
            status: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Order',
        },
    );
    return Order;
};
