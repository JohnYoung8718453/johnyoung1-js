// cryptoUtils.js
const crypto = require('crypto');

// Function to generate a random string of given length
function generateRandomString(length) {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

// Function to hash a password using SHA-256
function hashPassword(password) {
  const hash = crypto.createHash('sha256');
  hash.update(password);
  return hash.digest('hex');
}

// Function to encrypt data using AES-256-CBC
function encryptData(data, key, iv) {
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), Buffer.from(iv));
  let encrypted = cipher.update(data);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted.toString('hex');
}

// Function to decrypt data using AES-256-CBC
function decryptData(data, key, iv) {
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), Buffer.from(iv));
  let decrypted = decipher.update(Buffer.from(data, 'hex'));
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

module.exports = {
  generateRandomString,
  hashPassword,
  encryptData,
  decryptData
};
