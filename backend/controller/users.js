const UserModel = require("../model/user.model");

const getUsers = async (req , res) => {
    try {
        const loggedInuserId = req.user._id;

        const users = await UserModel.find({ _id : { $ne: loggedInuserId}}).select({password : 0})
        res.status(200).send(users)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}

module.exports = {
    getUsers,
}