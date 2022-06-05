import { fork } from 'child_process';
import { join } from 'path';
import { getDirname } from '../utils/get-dirname.js';
import { stdout, stdin } from 'process';
import { ChildProcModuleConstant } from './constants.js';

const args = process.argv.slice(2);

export const spawnChildProcess = async (args) => {
  const __dirname = getDirname(import.meta.url);
  const filePath = join(
    __dirname,
    ChildProcModuleConstant.folderName,
    ChildProcModuleConstant.childName,
  );

  fork(filePath, args, {
    silent: true,
    stdio: [stdin, stdout, 'ipc'],
  });
};

spawnChildProcess(args);
