module.exports = (sequelize, dataTypes) => {
    let alias = 'Generos'
    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        
    }
    let config = {
        tableName: 'genres',
        timeStamp: true,
        underScored: true
    }
    const generos = sequelize.define(alias, cols, config)
    return generos
}