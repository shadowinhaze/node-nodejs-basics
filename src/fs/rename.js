import { rename } from 'fs/promises';
import { getDirname } from '../utils/get-dirname.js';
import { join } from 'path';
import { RenameModuleConstant, ErrorMessage } from './constants.js';

export const renameFunc = async () => {
  const __dirname = getDirname(import.meta.url);

  rename(
    join(
      __dirname,
      RenameModuleConstant.dirName,
      RenameModuleConstant.oldFileName,
    ),
    join(
      __dirname,
      RenameModuleConstant.dirName,
      RenameModuleConstant.newFileName,
    ),
  ).catch((err) => {
    if (err) throw new Error(ErrorMessage.fs);
  });
};

renameFunc();
