import { Transform } from 'stream';

export const transform = async () => {
  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, [...chunk.toString()].reverse().join(''));
    },
  });

  process.stdin.pipe(reverse).pipe(process.stdout);
};

transform();
