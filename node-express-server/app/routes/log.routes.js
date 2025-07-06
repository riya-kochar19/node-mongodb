const logger = require("logging-lib");

module.exports = app => {
  app.post("/api/log", (req, res) => {
    const { level, message } = req.body;

    if (!message || !level) {
      return res.status(400).json({ error: "Missing level or message" });
    }

    if (logger[level]) {
      logger[level](message);
    } else {
      logger.info(message); // default to info
    }

    res.status(200).json({ status: "Logged successfully" });
  });
};
