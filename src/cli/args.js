export const parseArgs = () => {
  const args = process.argv.slice(2);

  const result = args
    .reduce((resultStr, arg, index, _args) => {
      const keyTester = /^--/;
      const nextInArgs = _args[index + 1];

      if (keyTester.test(arg) && !keyTester.test(nextInArgs)) {
        return (resultStr += ` ${arg.replace('--', '')} is ${nextInArgs},`);
      }

      return resultStr;
    }, '')
    .trim()
    .slice(0, -1);

  console.log(result);
};

parseArgs();
