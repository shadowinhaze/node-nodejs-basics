import { mkdir, readdir, copyFile } from 'fs/promises';
import { join } from 'path';
import { getDirname } from '../utils/get-dirname.js';
import { CopyModuleConstant, ErrorMessage } from './constants.js';

export const copy = async () => {
  const __dirname = getDirname(import.meta.url);

  const pathToSrc = join(__dirname, CopyModuleConstant.srcDirName);
  const pathToDest = join(__dirname, CopyModuleConstant.copyDirName);

  mkdir(pathToDest).catch((err) => {
    if (err) throw new Error(ErrorMessage.fs);
  });

  const itemsSrc = await readdir(pathToSrc);

  for (const elem of itemsSrc) {
    await copyFile(join(pathToSrc, elem), join(pathToDest, elem));
  }
};

copy();
