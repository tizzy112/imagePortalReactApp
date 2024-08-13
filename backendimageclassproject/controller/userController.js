//import user model
const User = require("../model/userModel");

exports.createUserPost = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res
      .status(201)
      .json({ status: "success", message: "User created successfully" });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
};
exports.getAllUserPost = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({ status: "success", count: user.length, data: user });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
};

exports.updateOneUserPost = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }
    await user.save();
    res.status(200).json({ status: "success", data: user });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
};
