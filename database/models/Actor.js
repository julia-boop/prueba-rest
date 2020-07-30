module.exports = (sequelize, dataTypes) => {
    let alias = 'Actores'
    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.CHAR(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.CHAR(100),
            allowNull:false
        },
        rating: {
            type: dataTypes.DECIMAL(3,1)
        }
    }
    let config = {
        tableName: 'actors',
        timeStamp: true,
        underscored: true
    }
    const actores = sequelize.define(alias, cols, config)
    return actores
}