const express = require("express");
const router = express.Router();
const models = require("../models");
const { Forms } = require("../models");
const {validateToken} = require('../middlewares/AuthMiddleware');

router.get("/", async (req, res) => {
    const listUserInfo = await models.companies.findAll();
    res.json(listUserInfo);
});

router.get("/:logindetailId", async (req, res) => {
    const userID = req.params.logindetailId;
    const user = await models.companies.findAll({ where: { logindetailId: userID }});
    res.json(user);
});

router.post("/:logindetailId", async (req, res) => {
    const workinfo = req.body;
    const userID = req.params.logindetailId;
    workinfo.logindetailId = userID;
    await models.companies.create(workinfo);
    res.json(workinfo);
});

module.exports = router;