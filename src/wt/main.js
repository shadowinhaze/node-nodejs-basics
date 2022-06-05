import { Worker, BroadcastChannel } from 'worker_threads';
import { join } from 'path';
import { getDirname } from '../utils/get-dirname.js';
import { cpus } from 'os';
import { PerfCalcModuleConstants, PerfCalcResultStatus } from './constants.js';

const processArray = (arr) => {
  return [...arr]
    .sort((a, b) => a.threadId - b.threadId)
    .map(({ result }) => ({
      status: result ? PerfCalcResultStatus.res : PerfCalcResultStatus.err,
      data: result,
    }));
};

const showResults = (condition, arr) => {
  if (condition) {
    console.log(processArray(arr));
    process.exit();
  }
};

export const performCalculations = async () => {
  const __dirname = getDirname(import.meta.url);
  const workerPath = join(__dirname, PerfCalcModuleConstants.workerName);

  const numCPUs = cpus().length;
  const results = [];
  const isFullResults = () => results.length === numCPUs;

  const bc = new BroadcastChannel(
    PerfCalcModuleConstants.mainBroadcastChannelName,
  );

  for (let i = 0; i < numCPUs; i++) {
    // here at index 2 is error handling check
    // const worker = new Worker(workerPath, {
    //   workerData:
    //     i === 1 || i === 3 ? 'null' : PerfCalcModuleConstants.fiboBase + i,
    // });

    // uncomment it and comment code above if you don't want error check
    const worker = new Worker(workerPath, {
      workerData: PerfCalcModuleConstants.fiboBase + i,
    });

    worker.on('error', (err) => {
      const threadId = worker.threadId;
      results.push({ threadId, result: null });

      showResults(isFullResults(), results);
    });
  }

  bc.onmessage = (msg) => {
    results.push(msg.data);

    showResults(isFullResults(), results);
  };
};

performCalculations();
