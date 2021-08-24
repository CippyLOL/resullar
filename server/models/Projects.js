module.exports = (sequelize, DataTypes) => {
    const Projects = sequelize.define("projects", {
        projectname: {
            type: DataTypes.STRING,
            alowNull: false,
        },
        aboutproject: {
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

    return Projects
}