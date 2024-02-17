const { User, Thought } = require("../models");

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate("thoughts").populate("friends");
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get a single user by its id
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate("thoughts")
      .populate("friends");
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Update a user by its id
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Delete a user by its id and remove their thoughts
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    // Bonus: Remove a user's associated thoughts when deleted
    await Thought.deleteMany({ username: user.username });
    res.send(`User and their thoughts removed`);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
