import { ParseEnvModuleConstants } from './constants.js';

export const parseEnv = () => {
  const envData = process.env;

  const envInfo = Object.entries(envData).reduce((resultStr, [key, value]) => {
    if (key.includes(ParseEnvModuleConstants.envPrefix)) {
      return `${resultStr} ${key} = ${value};`;
    }

    return resultStr;
  }, '');

  console.log(envInfo.trim());
};

parseEnv();
