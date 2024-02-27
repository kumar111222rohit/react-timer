import { ArgType } from '../../types/baseTypes';

async function helloWorld(arg?: ArgType) {
  if (arg === true) {
    return new Promise(resolve => resolve('Hello')); // Resolve with "Hello"
  } else if (arg === false) {
    return new Promise((_, reject) => reject('World')); // Reject with "World"
  } else {
    // Do nothing
    return;
  }
}

export default helloWorld;
