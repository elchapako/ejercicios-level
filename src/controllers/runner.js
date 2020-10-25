const { Pool } = require("pg");

const db = new Pool({
  host: "localhost",
  user: "ERIM",
  password: "",
  database: "runners",
  port: "5432",
});

const getRunners = async (req, res) => {
  const response = await db.query("SELECT * FROM users");
  res.status(200).json(response.rows);
};

const createRunner = async (req, res) => {
  const { name, email, kilometers } = req.body;

  if (kilometers < 5) {
    return res.send("Debes de caminar más");
  }

  const response = await db.query(
    "INSERT INTO users (name, email, kilometers) VALUES ($1, $2, $3)",
    [name, email, kilometers]
  );

  console.log(response);
  res.send("runner created");
};

module.exports = {
  getRunners,
  createRunner,
};
