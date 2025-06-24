export const fakeFetch = (data: any, delay = 1000) => {
    return new Promise<any>((resolve) => {
        setTimeout(() => resolve(data), delay);
    });
};