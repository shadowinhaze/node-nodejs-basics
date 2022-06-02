import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { getDirname } from '../utils/get-dirname.js';
import { CalcHashModule } from './constants.js';
import { join } from 'path';

export const calculateHash = async () => {
  const __dirname = getDirname(import.meta.url);

  const filePath = join(
    __dirname,
    CalcHashModule.dirName,
    CalcHashModule.fileName,
  );

  const stream = createReadStream(filePath);

  stream.on('data', (data) => {
    const hashSum = createHash('sha256');
    hashSum.update(data);
    console.log(hashSum.digest('hex'));
  });
};

calculateHash();
