export const fetchHandler = res => {  
  if (!res.ok) throw Error(res.statusText);
  return res.json();
};

export const promiseWithTimeout = (promise, milliseconds) => {
  const timeout =  new Promise((resolve, reject) =>
    setTimeout(() => 
      reject(`Promise timeout reached (limit: ${milliseconds} ms)`), 
          milliseconds));

  return Promise.race([
    timeout, 
    promise
  ]);
};
