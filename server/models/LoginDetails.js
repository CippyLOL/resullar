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

    // LoginDetails.associate = models => {
    //     LoginDetails.hasMany(models.userdetails, {
    //         onDelete: "cascade",
    //     });
    // };

    // LoginDetails.associate = models => {
    //     LoginDetails.hasMany(models.schools, {
    //         onDelete: "cascade",
    //     });
    // };

    // LoginDetails.associate = models => {
    //     LoginDetails.hasMany(models.companies, {
    //         onDelete: "cascade",
    //     });
    // };

    // LoginDetails.associate = models => {
    //     LoginDetails.hasMany(models.projects, {
    //         onDelete: "cascade",
    //     });
    // };

    // LoginDetails.associate = models => {
    //     LoginDetails.hasMany(models.skills, {
    //         onDelete: "cascade",
    //     });
    // };

    return LoginDetails
}