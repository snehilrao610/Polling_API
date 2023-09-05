const express = require("express");
const bodyParser = require("body-parser");
const QuestionRoutes = require("./routes/QuestionRoutes");
const OptionRoutes = require("./routes/OptionRoutes");
const db = require("./lib/db");

const app = express();
app.use(bodyParser.json());

app.use("/questions", QuestionRoutes);
// Use question and option routes
// app.use("/questions", questionRoutes);
app.use("/options", OptionRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
