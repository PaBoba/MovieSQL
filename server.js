const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/index");

const app = express();
const PORT = process.env.PORT;

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB successfully connected");
  })
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
