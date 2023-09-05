const Option = require("../models/Option");
const Question = require("../models/Question");

// Create a new question
exports.create = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title || title === "") {
      res.json({ msg: "Title is necessary" });
    }
    const question = new Question({ title });
    await question.save();
    res.status(201).json({
      question: { title: question.title, _id: question._id, option: [] },
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};
// Delete a question
exports.deleteQuestion = async (req, res) => {
  const { id } = req.params;

  try {
    const question = await Question.findById(id);
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }
    const options = await Option.find({ questionId: question._id });
    if (!options) {
      await Question.deleteOne(question._id);
      res.json({ message: "Question deleted successfully" });
    }

    // Check if any option has votes
    const hasVotes = options.some((option) => option.votes > 0);

    if (hasVotes) {
      return res.status(400).json({
        message: "Cannot delete a question with options that have votes",
      });
    }

    // If no votes, delete the question
    await Question.deleteOne(question._id);
    res.json({ message: "Question deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
//View question
exports.view = async (req, res) => {
  let { id } = req.params;

  let question = await Question.findById(id);
  let options = await Option.find({ questionId: question._id });

  res.status(200).json({
    question: {
      _id: question._id,
      title: question.title,
      option: options.map((opt) => {
        return {
          _id: opt._id,
          text: opt.text,
          votes: opt.votes,
          link_to_vote: "/optiosn/" + "add_vote/" + opt._id,
        };
      }),
    },
  });
};
// show all questions
exports.show = async (req, res) => {
  let question = await Question.find();
  res.status(200).json({
    message: "Question Here",
    question,
  });
};
