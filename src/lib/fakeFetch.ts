export const fakeFetch = <T>(data: T, delay = 1000): Promise<T> => {
  return new Promise<T>((resolve) => {
    setTimeout(() => resolve(data), delay);
  });
};
