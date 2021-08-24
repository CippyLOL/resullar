const express = require("express");
const router = express.Router();
const models = require("../models");
const { Forms } = require("../models");
const {validateToken} = require('../middlewares/AuthMiddleware');

router.get("/", async (req, res) => {
    const listUserInfo = await models.skills.findAll();
    res.json(listUserInfo);
});

router.get("/:logindetailId", async (req, res) => {
    const userID = req.params.logindetailId;
    const user = await models.skills.findAll({ where: { logindetailId: userID }});
    res.json(user);
});

router.post("/:logindetailId", async (req, res) => {
    const skillinfo = req.body;
    const userID = req.params.logindetailId;
    skillinfo.logindetailId = userID;
    await models.skills.create(skillinfo);
    res.json(skillinfo);
});

module.exports = router;