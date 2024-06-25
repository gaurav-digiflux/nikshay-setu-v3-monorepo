const configA = require('dotenv')
configA.config({ path: './.env' });
console.log('process.env.NX_PUBLIC', process.env.NX_PUBLIC);