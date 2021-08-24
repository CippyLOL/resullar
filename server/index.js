const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require('./models');

const usersRouter = require('./routes/UserDetails')
app.use("/userdetails", usersRouter);
const schoolsRouter = require('./routes/Schools')
app.use("/schools", schoolsRouter);
const workRouter = require('./routes/Companies')
app.use("/companies", workRouter);
const projectsRouter = require('./routes/Projects')
app.use("/projects", projectsRouter);
const skillsRouter = require('./routes/Skills')
app.use("/skills", skillsRouter);
const loginRouter = require('./routes/LoginDetails')
app.use("/auth", loginRouter);

db.sequelize.sync().then(() => {
    app.listen('3001', () => {
        console.log('Server running on port 3001');
    });
});

