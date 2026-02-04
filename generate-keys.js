const crypto = require('crypto');

const generateSecret = () => crypto.randomBytes(16).toString('base64');

console.log(`HOST=0.0.0.0
PORT=1337
APP_KEYS=${generateSecret()},${generateSecret()},${generateSecret()},${generateSecret()}
API_TOKEN_SALT=${generateSecret()}
ADMIN_JWT_SECRET=${generateSecret()}
TRANSFER_TOKEN_SALT=${generateSecret()}
JWT_SECRET=${generateSecret()}
ENCRYPTION_KEY=${generateSecret()}`);
