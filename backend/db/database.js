const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
  "./users_database.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.error(err.message);
      throw new Error("Failed to connect to SQLite database.");
    } else {
      console.log("Connected to SQLite database.");
    }
  }
);

module.exports = db;
