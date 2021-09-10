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
        jobrole: {
            type: DataTypes.TEXT,
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

    return Companies
}