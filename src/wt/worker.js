import { workerData, BroadcastChannel, threadId } from 'worker_threads';
import { PerfCalcModuleConstants } from './constants.js';

const bc = new BroadcastChannel(
  PerfCalcModuleConstants.mainBroadcastChannelName,
);
// n should be received from main thread
export const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  const result = nthFibonacci(workerData);

  bc.postMessage({ threadId, result });
};

sendResult();
