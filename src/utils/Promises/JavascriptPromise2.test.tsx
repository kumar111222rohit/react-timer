import helloWorld from './JavascriptPromise2';

describe('helloWorld function', () => {
  it('should resolve with "Hello" when argument is true', async () => {
    await expect(helloWorld(true)).resolves.toBe('Hello');
  });

  it('shoudl reject with "World" when argument is false', async () => {
    await expect(helloWorld(false)).rejects.toBe('World');
  });

  it('shoudl return undefined when no argument is passed', async () => {
    const result = await helloWorld();
    expect(result).toBeUndefined();
  });
});
