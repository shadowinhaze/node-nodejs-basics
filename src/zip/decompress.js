import { zipper } from './zipper.js';
import { ZipModuleMode } from './constants.js';

export const decompress = async () => {
  zipper(ZipModuleMode.decompress, import.meta.url);
};

decompress();
