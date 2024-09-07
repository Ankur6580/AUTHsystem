const db = require('./db/database');

db.run(`
  CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT UNIQUE,
      password TEXT,
      reset_token TEXT,
      reset_token_expiry INTEGER
    )
  `, (err) => {
  if (err) {
    console.error('Error creating table:', err.message);
  } else {
    console.log('Users table created.');
  }
});
