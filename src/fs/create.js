import { writeFile } from 'node:fs';
import { getDirname } from '../utils/get-dirname.js';
import { CreateModuleConstant, ErrorMessage } from './constants.js';
import { join } from 'path';

export const create = async () => {
  const __dirname = getDirname(import.meta.url);
  const filesDir = join(__dirname, CreateModuleConstant.dirName);

  writeFile(
    `${filesDir}/${CreateModuleConstant.fileName}`,
    CreateModuleConstant.fileContent,
    { flag: 'wx' },
    (err) => {
      if (err) throw new Error(ErrorMessage.fs);
    },
  );
};

create();
