const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require('./models');

<<<<<<< Updated upstream
const dataRouter = require('./routes/modules')
app.use("/resumebuilder", dataRouter);
=======
const usersRouter = require('./routes/UserDetails')
app.use("/resumebuilder", usersRouter);
const loginRouter = require('./routes/LoginDetails')
app.use("/auth", loginRouter);
>>>>>>> Stashed changes

db.sequelize.sync().then(() => {
    app.listen('3001', () => {
        console.log('Server running on port 3001');
    });
});

