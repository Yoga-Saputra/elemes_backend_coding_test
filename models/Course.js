module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      type: {
        type: DataTypes.ENUM,
        values: ['free', 'premium'],
        allowNull: false,
      },
      category: {
        type: DataTypes.ENUM,
        values: ['all-level', 'beginner', 'intermediate', 'advance', 'populer'],
        allowNull: false,
      },
      createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
        allowNull: true,
      },
      updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
        allowNull: true,
      }
  }, {
      tableName: 'courses',
      timestamps: true
  })

  return Course
}