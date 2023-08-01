'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Messages.belongsTo(models.Users, { foreignKey: 'senderId' });
      Messages.belongsTo(models.Conversations, { foreignKey: 'conversationId' });

    }
  }
  Messages.init({
    conversationId: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    senderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Messages',
  });
  return Messages;
};