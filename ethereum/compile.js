const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');



//logic to delete the build folder 
const buildPath = path.resolve(__dirname, 'build');
//removeSync comes from fs extra 
fs.removeSync(buildPath);


