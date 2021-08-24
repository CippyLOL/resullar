module.exports = (sequelize, DataTypes) => {
    const Skills = sequelize.define("skills", {
        skillset: {
            type: DataTypes.STRING,
            alowNull: false,
        },
    })

    return Skills
}