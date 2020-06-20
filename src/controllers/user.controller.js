const User = require('../models/User');

const userController = {};

userController.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

userController.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user)
};

userController.createUser = async (req, res) => {
    const { userName } = req.body;
    
    const newUser = new User({
        userName
    })

    await newUser.save();

    res.json({message: 'save user'})
};

userController.updateUser = async (req, res) => {
    const { userName } = req.body;

    await User.findOneAndUpdate({_id: req.params.id}, {
        userName
    })
    res.json({message: 'user update'})
};

userController.deleteUser = async (req, res) => {
    await User.findOneAndDelete({_id: req.params.id})
    res.json({message: 'user delete'})
};

module.exports = userController;