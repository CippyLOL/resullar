const express = require("express");
const router = express.Router();
const models = require("../models");

router.get("/", async (req, res) => {
    const listUserInfo = await models.userdetails.findAll();
    res.json(listUserInfo);
});

router.post("/", async (req, res) => {
    const userinfo = req.body;
    await models.userdetails.create(userinfo);
    res.json(userinfo);
});

module.exports = router;