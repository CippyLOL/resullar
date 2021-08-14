const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require('./models');

const dataRouter = require('./routes/modules')
app.use("/resumebuilder", dataRouter);

db.sequelize.sync().then(() => {
    app.listen('3001', () => {
        console.log('Server running on port 3001');
    });
});

