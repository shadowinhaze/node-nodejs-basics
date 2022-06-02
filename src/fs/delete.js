import { rm } from 'fs/promises';
import { getDirname } from '../utils/get-dirname.js';
import { join } from 'path';
import { DeleteModuleConstant, ErrorMessage } from './constants.js';

export const remove = async () => {
  const __dirname = getDirname(import.meta.url);

  rm(
    join(
      __dirname,
      DeleteModuleConstant.dirName,
      DeleteModuleConstant.fileName,
    ),
  ).catch((err) => {
    if (err) throw new Error(ErrorMessage.fs);
  });
};

remove();
