import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const getDirname = (imp) => {
  const __filename = fileURLToPath(imp);
  return dirname(__filename);
};
