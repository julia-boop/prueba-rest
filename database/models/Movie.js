module.exports = (sequelize, dataTypes) => {
    let alias = 'Peliculas';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING(500),
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1),
            allowNull: false
        },
        awards: {
            type: dataTypes.INTEGER(10),
            allowNull: false
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        length: {
            type: dataTypes.INTEGER(10)
        }
    };
    let config = {
        tableName: 'movies',
        timestamps: true,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        underscored: true
    };
    const Peli = sequelize.define(alias, cols, config);
    return Peli;
}