module.exports = (sequelize, DataTypes) => {
    const LoginDetails = sequelize.define("logindetails", {
        username: {
            type: DataTypes.STRING,
            alowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            alowNull: false,
        },
    });

    // LoginDetails.associate = (models) => {
    //     LoginDetails.hasMany(models.UserDetails, {
    //         onDelete: "cascade",
    //     });
    // };

    return LoginDetails
}