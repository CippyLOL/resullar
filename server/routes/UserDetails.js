const express = require("express");
const router = express.Router();
const models = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", async (req, res) => {
    const listUserInfo = await models.userdetails.findAll();
    res.json(listUserInfo);
});

router.get("/:logindetailId", async (req, res) => {
    const userID = req.params.logindetailId;
    const user = await models.userdetails.findAll({ where: { logindetailId: userID }});
    res.json(user);
});

router.post("/:logindetailId", async (req, res) => {
    const userinfo = req.body;
    const userID = req.params.logindetailId;
    userinfo.logindetailId = userID;
    await models.userdetails.create(userinfo);
    res.json(userinfo);
});

module.exports = router;