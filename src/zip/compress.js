import { zipper } from './zipper.js';
import { ZipModuleMode } from './constants.js';

export const compress = async () => {
  zipper(ZipModuleMode.compress, import.meta.url);
};

compress();
