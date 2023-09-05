const Option = require("../models/Option");
const Question = require("../models/Question");

// Add a vote to an option
exports.addVote = async (req, res) => {
  const { id } = req.params;

  try {
    const option = await Option.findById(id);

    if (!option) {
      return res.status(404).json({ message: "Option not found" });
    }

    option.votes++;
    await option.save();
    res.json(option);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
// Add options to a question
exports.createOption = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  try {
    const question = await Question.findById(id);

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }
    if (!text || text === "")
      return res.status(401).json({ message: "Text must be string" });

    let option = new Option({
      text,
      votes: 0,
      questionId: question._id,
    });

    await option.save();
    res.status(201).json({
      msg: "Option Created",
      question: {
        _id: question._id,
        title: question.title,
        option: [
          {
            _id: option._id,
            text: option.text,
            votes: option.votes,
            link_to_vote: "/options/" + "add_vote/" + option._id,
          },
        ],
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
// Delete an option
exports.deleteOption = async (req, res) => {
  const { id } = req.params;

  try {
    const option = await Option.findById(id);

    if (!option) {
      return res.status(404).json({ message: "Option not found" });
    }
    if (option.votes !== 0)
      return res.status(401).json({ messaeg: "Can not delete this option" });

    await Option.findByIdAndRemove(id);

    res.json({ message: "Option deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
