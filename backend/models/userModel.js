const db = require('../db/database');
const bcrypt = require('bcryptjs');

exports.createUser = async (name, email, hashedPassword) => {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO users (name, email, password) VALUES (?, ?, ?)`, [name, email, hashedPassword], function (err) {
      if (err) {
        return reject(err);
      }
      resolve({ id: this.lastID });
    });
  });
};

exports.findUserByEmail = async (email) => {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, user) => {
      if (err) {
        return reject(err);
      }
      resolve(user || null);
    });
  });
};

exports.updateUserPassword = (email, newPassword) => {
  return new Promise((resolve, reject) => {
    db.run(`UPDATE users SET password = ? WHERE email = ?`, [newPassword, email], function (err) {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};

exports.storePasswordResetToken = (id, token, expiry) => {
  return new Promise((resolve, reject) => {
    db.run(`UPDATE users SET reset_token = ?, reset_token_expiry = ? WHERE id = ?`, [token, expiry, id], function (err) {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};

exports.findUserByResetToken = (token) => {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM users WHERE reset_token = ? AND reset_token_expiry > ?`, [token, Date.now()], (err, user) => {
      if (err) {
        return reject(err);
      }
      resolve(user || null);
    });
  });
};
