module.exports = (sequelize, DataTypes) => {
    const Schools = sequelize.define("schools", {
        schoolname: {
            type: DataTypes.STRING,
            alowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            alowNull: false,
        },
        certification: {
            type: DataTypes.STRING,
            alowNull: false,
        },
        major: {
            type: DataTypes.STRING,
            alowNull: false,
        },
        startyear: {
            type: DataTypes.INTEGER,
            alowNull: false,
        },
        endyear: {
            type: DataTypes.INTEGER,
            alowNull: false,
        },
       
    })

    return Schools
}