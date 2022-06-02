import { readdir } from 'fs/promises';
import { join } from 'path';
import { getDirname } from '../utils/get-dirname.js';
import { ListModuleConstant, ErrorMessage } from './constants.js';

export const list = async () => {
  const __dirname = getDirname(import.meta.url);

  const pathToFolder = join(__dirname, ListModuleConstant.dirName);

  const itemsSrc = await readdir(pathToFolder);

  console.log(itemsSrc);
};

list();
