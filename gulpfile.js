const fs = require('fs');

function copyDevEnv(cb) {
  fs.copyFile('.env.development', '.env', cb);
}

module.exports = {
  copyDevEnv
};
