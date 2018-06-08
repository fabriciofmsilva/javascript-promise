export const fetchHandler = res => {  
  if (!res.ok) throw Error(res.statusText);
  return res.json();
};

export const delay = time => data =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve(data), time));

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

export const retry = (fn, retries = 3, time = 2000) =>
  fn().catch(err => 
    delay(time)().then(() => 
      retries > 1
        ? retry(fn, retries - 1, time)
        : Promise.reject(err))
  );
