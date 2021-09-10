const express = require("express");
const router = express.Router();
const models = require("../models");
const { Forms } = require("../models");
const {validateToken} = require('../middlewares/AuthMiddleware');

router.get("/", async (req, res) => {
    const listUserInfo = await models.schools.findAll();
    res.json(listUserInfo);
});

router.get("/:logindetailId", async (req, res) => {
    const userID = req.params.logindetailId;
    const user = await models.schools.findAll({ where: { logindetailId: userID }});
    res.json(user);
});

router.post("/:logindetailId", async (req, res) => {
    const schoolinfo = req.body;
    const userID = req.params.logindetailId;
    schoolinfo.logindetailId = userID;
    await models.schools.create(schoolinfo);
    res.json(schoolinfo);
});

module.exports = router;