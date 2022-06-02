import { sep } from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createRequire } from 'module';

import './files/c.js';

const meta = import.meta.url;
const require = createRequire(meta);

const __filename = fileURLToPath(meta);
const __dirname = dirname(__filename);

const unknownObject = require(Math.random() > 0.5
  ? './files/a.json'
  : './files/b.json');

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

export { unknownObject, createMyServer };
