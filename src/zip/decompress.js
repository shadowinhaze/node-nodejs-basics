import { join } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import { getDirname } from '../utils/get-dirname.js';
import { CompressModuleConstant } from './constants.js';

export const decompress = async () => {
  const gzip = createUnzip();

  const __dirname = getDirname(import.meta.url);

  const filePath = join(
    __dirname,
    CompressModuleConstant.dirName,
    CompressModuleConstant.compressedFileName,
  );

  const decompressedFileName = join(
    __dirname,
    CompressModuleConstant.dirName,
    CompressModuleConstant.fileName,
  );

  const readStream = createReadStream(filePath);
  const writeStream = createWriteStream(decompressedFileName);

  readStream.pipe(gzip).pipe(writeStream);
};

decompress();
