import { join } from 'path';
import { createWriteStream } from 'fs';
import { getDirname } from '../utils/get-dirname.js';
import { WriteStreamModuleConstant } from './constants.js';

export const write = async () => {
  const __dirname = getDirname(import.meta.url);

  const filePath = join(
    __dirname,
    WriteStreamModuleConstant.dirName,
    WriteStreamModuleConstant.fileName,
  );

  const stream = createWriteStream(filePath);

  process.stdin.on('data', (input) => {
    stream.write(input.toString());
  });
};

write();
