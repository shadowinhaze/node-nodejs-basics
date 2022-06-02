import { join } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { getDirname } from '../utils/get-dirname.js';
import { CompressModuleConstant } from './constants.js';

export const compress = async () => {
  const gzip = createGzip();

  const __dirname = getDirname(import.meta.url);

  const filePath = join(
    __dirname,
    CompressModuleConstant.dirName,
    CompressModuleConstant.fileName,
  );

  const compressedFileName = join(
    __dirname,
    CompressModuleConstant.dirName,
    CompressModuleConstant.compressedFileName,
  );

  const readStream = createReadStream(filePath);
  const writeStream = createWriteStream(compressedFileName);

  readStream.pipe(gzip).pipe(writeStream);
};

compress();
