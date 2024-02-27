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

export {withTimeout};
