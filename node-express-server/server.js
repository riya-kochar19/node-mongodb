const express = require("express");
const cors = require("cors");
const logger = require("logging-lib"); // ✅ Import logger

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    logger.info("Connected to the database!");
  })
  .catch(err => {
    logger.error("Cannot connect to the database! " + err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  logger.info("GET / route called");
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/turorial.routes")(app);
require("./app/routes/log.routes")(app); 


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}.`);
});
