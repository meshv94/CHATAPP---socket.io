const UserModel = require("../model/user.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const generateAndSetToken = require("../utils/generateAndSetToken.js");

const register = async (req, res) => {
  try {
    const { username, phone, password, gender } = req.body;
    const userExist = await UserModel.findOne({ phone, username });
    if (userExist) {
      res.status(400).json({ msg: "user already exist" });
    } else {
      const hash_password = await bcrypt.hash(password, 10);

      const male_profile = `https://avatar.iran.liara.run/public/boy?username=${username}`;
      const female_profile = `https://avatar.iran.liara.run/public/girl?username=${username}`;

      const result = await UserModel.create({
        username,
        phone,
        password: hash_password,
        gender,
        avatar: gender == "male" ? male_profile : female_profile,
      });
      const token = generateAndSetToken(req, res, result._id);
      res.status(201).json({ jwt: token });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await UserModel.findOne({ username });
    // console.log(result._id)
    if (!result) {
      res.status(200).json({ msg: "user not found" });
    } else {
      const isValidUser = await bcrypt.compare(password, result.password);

      if (isValidUser) {
        res.status(200).json({ msg: "login success" });
      } else {
        res.status(200).json({ msg: "Invalid username or password" });
      }
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ msg: "logout success" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  register,
  login,
  logout,
};
