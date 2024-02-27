/**
 * @param arg (Optional) An argument that can be true, false, or undefined.
 * @returns A Promise that resolves with "Hello" if the argument is true,
 *          rejects with "World" if the argument is false, or
 *          does nothing if the argument is undefined.
 */

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
