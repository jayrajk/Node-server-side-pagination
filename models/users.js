'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstName: DataTypes.STRING(15),
    lastName: DataTypes.STRING(15)
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};