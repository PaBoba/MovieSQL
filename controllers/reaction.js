const { Thought } = require("../models");

// add a reaction to a thought
exports.addReaction = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $push: { reactions: req.body } },
      { new: true, runValidators: true }
    );
    if (!thought) {
      return res.status(404).send("Thought not found");
    }
    res.json(thought);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// remove a reaction from a thought
exports.removeReaction = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    );
    if (!thought) {
      return res.status(404).send("Thought not found");
    }
    res.json(thought);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
