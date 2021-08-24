module.exports = (sequelize, DataTypes) => {
    const UserDetails = sequelize.define("userdetails", {
        fullname: {
            type: DataTypes.STRING,
            alowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            alowNull: false,
        },
        phone: {
            type: DataTypes.INTEGER,
            alowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            alowNull: false,
        },
    });

    return UserDetails
}