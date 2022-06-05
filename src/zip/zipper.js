import { join } from 'path';
import { ZipModuleConstant, ZipModuleMode } from './constants.js';
import { getDirname } from '../utils/get-dirname.js';
import { createReadStream, createWriteStream } from 'fs';

export const zipper = async (mode, local) => {
  let gzip, readStream, writeStream;

  const __dirname = getDirname(local);

  const rawFilePath = join(
    __dirname,
    ZipModuleConstant.dirName,
    ZipModuleConstant.rawFileName,
  );

  const compressedFileName = join(
    __dirname,
    ZipModuleConstant.dirName,
    ZipModuleConstant.compressedFileName,
  );

  switch (mode) {
    case ZipModuleMode.compress:
      import('zlib').then(({ createGzip }) => {
        gzip = createGzip();
        readStream = createReadStream(rawFilePath);
        writeStream = createWriteStream(compressedFileName);
        readStream.pipe(gzip).pipe(writeStream);
      });
      break;
    case ZipModuleMode.decompress:
      import('zlib').then(({ createUnzip }) => {
        gzip = createUnzip();
        readStream = createReadStream(compressedFileName);
        writeStream = createWriteStream(rawFilePath);
        readStream.pipe(gzip).pipe(writeStream);
      });
      break;
  }
};
