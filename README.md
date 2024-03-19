# JohnYoung-js

A Node.js module for cryptographic utilities.

## Installation

You can install this module via npm: `npm install JohnYoung-js`

## Usage
```javascript
const cryptoUtils = require('crypto-utils');

// Generate a random string
const randomString = cryptoUtils.generateRandomString(10);
console.log('Random String:', randomString);

// Hash a password
const password = 'myPassword123';
const hashedPassword = cryptoUtils.hashPassword(password);
console.log('Hashed Password:', hashedPassword);

// Encrypt and decrypt data
const key = 'supersecretkey';
const iv = 'supersecretiv123';
const data = 'This is some sensitive data';
const encryptedData = cryptoUtils.encryptData(data, key, iv);
console.log('Encrypted Data:', encryptedData);
const decryptedData = cryptoUtils.decryptData(encryptedData, key, iv);
console.log('Decrypted Data:', decryptedData);
```

