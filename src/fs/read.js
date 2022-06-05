import { createReadStream } from 'fs';
import { getDirname } from '../utils/get-dirname.js';
import { join } from 'path';
import { ReadModuleConstant, ErrorMessage } from './constants.js';

export const read = async () => {
  const __dirname = getDirname(import.meta.url);

  const filePath = join(
    __dirname,
    ReadModuleConstant.dirName,
    ReadModuleConstant.fileName,
  );

  const stream = createReadStream(filePath);

  stream.on('data', (data) => {
    console.log(data.toString());
  });

  stream.on('error', (err) => {
    if (err) throw new Error(ErrorMessage.fs);
  });
};

read();
