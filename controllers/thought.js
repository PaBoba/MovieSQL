const { User, Thought } = require("../models");

// get all thoughts
exports.getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// get a single thought by its id
exports.getThoughtById = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    if (!thought) {
      return res.status(404).send("Thought not found");
    }
    res.json(thought);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// create a new thought and link it to the user
exports.createThought = async (req, res) => {
  try {
    const thought = await Thought.create(req.body);
    await User.findByIdAndUpdate(
      req.body.userId,
      { $push: { thoughts: thought._id } },
      { new: true }
    );
    res.json(thought);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// update a thought by its id
exports.updateThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!thought) {
      return res.status(404).send("Thought not found");
    }
    res.json(thought);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// delete a thought by its id
exports.deleteThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.id);
    if (!thought) {
      return res.status(404).send("Thought not found");
    }
    res.send("Thought removed");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
