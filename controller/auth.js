
const user = require("../models/user");
const appFail = require("../utils/appFail");
const appSuccess = require("../utils/appSuccess");
const bcrypt = require("bcrypt");
const generatToken=require('../utils/generateToken')

module.exports = {
  register: async (req, res, next) => {
    const newExist = await user.findOne({ email: req.body.email });
    if (newExist) {
      return res.json(new appFail("User exist!!!"));
    }
    const userinfo = new user(req.body);
    userinfo.password = bcrypt.hashSync(userinfo.password, 10);
    await userinfo.save();
    res.json(new appSuccess(userinfo));
  },
  login: async (req, res, next) => {
    const userExist = await user.findOne({ email: req.body.email });
    console.log('checkuser :'+ userExist)
    if (!userExist) {
      return res.json(new appFail("somthing went wrong .."));
    }

    const verifypassword = bcrypt.compareSync(
      req.body.password,
      userExist.password
    );

    if (!verifypassword) {
      return res.json(new appFail("somthing went wrong .."));
    }
    const token=generatToken(userExist._id)
    res.json(new appSuccess(token))
  },
};
