const express = require("express");
const router = express.Router();
const models = require("../models");
const { Forms } = require("../models");
const {validateToken} = require('../middlewares/AuthMiddleware');

router.get("/", async (req, res) => {
    const listUserInfo = await models.projects.findAll();
    res.json(listUserInfo);
});

router.get("/:logindetailId", async (req, res) => {
    const userID = req.params.logindetailId;
    const user = await models.projects.findAll({ where: { logindetailId: userID }});
    res.json(user);
});

router.post("/:logindetailId", async (req, res) => {
    const projectinfo = req.body;
    const userID = req.params.logindetailId;
    projectinfo.logindetailId = userID;
    await models.projects.create(projectinfo);
    res.json(projectinfo);
});

module.exports = router;