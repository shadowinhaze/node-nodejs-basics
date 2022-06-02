import { join } from 'path';
import { createReadStream } from 'fs';
import { getDirname } from '../utils/get-dirname.js';
import { ReadStreamModuleConstant } from './constants.js';

export const read = async () => {
  const __dirname = getDirname(import.meta.url);

  const filePath = join(
    __dirname,
    ReadStreamModuleConstant.dirName,
    ReadStreamModuleConstant.fileName,
  );

  const stream = createReadStream(filePath);

  stream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });
};

read();
