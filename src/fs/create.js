import { writeFile } from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filesDir = path.join(__dirname, '/files');

export const create = async () => {
  writeFile(
    `${filesDir}/fresh.txt`,
    'I am fresh and young',
    { flag: 'wx' },
    (err) => {
      if (err) throw new Error('FS operation failed');
    },
  );
};

create();
