const express = require("express");
const router = express.Router();
const models = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require('jsonwebtoken');
const { validateToken } = require("../middlewares/AuthMiddleware");

router.post("/", async (req, res) => {
    const { username, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        models.logindetails.create({
            username: username,
            password: hash,
        })
        res.json("Success");
    })
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await models.logindetails.findOne({ where: { username: username } });

    if (!user) res.json({ error: "User doesn't exist" });

    bcrypt.compare(password, user.password).then((match) => {
        if (!match) res.json({ error: "Wrong username and password combination" });

        const accessToken = sign({ username: user.username, id: user.id }, "important");

        res.json(accessToken);
    });
});

router.get("/auth", validateToken, (req, res) => {
    res.json(req.user);
});

module.exports = router;