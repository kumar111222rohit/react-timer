import { withTimeout } from './JavascriptPromise1';

describe('withTimeout function', () => {
  it('should resolve before timeout', async () => {
    const fastFunction = () =>
      new Promise(resolve => setTimeout(() => resolve('fast'), 100));
    const result = withTimeout(fastFunction, 200);

    await expect(result()).resolves.toBe('fast');
  });

  it('should reject before timeout', async () => {
    const fastRejectFunction = () =>
      new Promise((_, reject) => setTimeout(() => reject('error'), 100));
    const result = withTimeout(fastRejectFunction, 200);

    await expect(result()).rejects.toBe('error');
  });

  it('should time out if function takes too long', async () => {
    const slowFunction = () =>
      new Promise(resolve => setTimeout(() => resolve('slow'), 300));
    const result = withTimeout(slowFunction, 200);

    await expect(result()).rejects.toBe('Time Limit Exceeded');
  });
});
