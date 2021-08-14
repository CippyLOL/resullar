module.exports = (sequelize, DataTypes) => {
    const Companies = sequelize.define("companies", {
        companyname: {
            type: DataTypes.STRING,
            alowNull: false,
        },
        location: {
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
        responsibilities: {
            type: DataTypes.STRING,
            alowNull: false,
        },
    })

    return Companies
}