import { fetchHandler, promiseWithTimeout } from './promise-util.js';

const getNegociacoes = () =>  
    fetch ('http://localhost:3000/negociacoes/semana')
    .then(fetchHandler);

promiseWithTimeout(getNegociacoes(), 100)
  .then(negotiations => {
    console.log(negotiations);
    alert('Operation complete!');
  })
  .catch(err => {
    console.log(err);
    alert('Operation failed!');
  }); 
