/**
 * @param fn - The function to be wrapped.
 * @param timeoutMillis - The timeout duration in milliseconds.
 * @returns A new Promise that resolves with the result of the wrapped function or rejects with a "Time Limit Exceeded" error.
 **/
function withTimeout<T>(
  fn: () => Promise<T>,
  timeoutMillis: number
): () => Promise<T> {
  return async (): Promise<T> => {
    let timeoutHandle: NodeJS.Timeout | undefined;
    const timeoutPromise = new Promise<T>((_, reject) => {
      //handle timeout
      timeoutHandle = setTimeout(() => {
        reject('Time Limit Exceeded');
      }, timeoutMillis);
    });

    try {
      // return whichever promise returns first
      const result = await Promise.race([fn(), timeoutPromise]);
      return result;
    } finally {
      clearTimeout(timeoutHandle);
    }
  };
}

export { withTimeout };
