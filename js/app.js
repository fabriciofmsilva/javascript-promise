import { fetchHandler, delay, promiseWithTimeout, retry } from './promise-util.js';

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

const getNegotiations = () =>  
  fetch ('http://localhost:3000/negociacoes/semana')
    .then(fetchHandler);

// document
//   .querySelector('#btn')
//   .onclick = () => 
//     getNegotiations()
//     .then(delay(3000)) // usando a função
//     .then(negotiations => {
//       console.log(negotiations);
//       alert('Operation complete!');
//     })
//     .catch(err => {
//       console.log(err);
//       alert('Operation failed!');
//     });

document
  .querySelector('#btn')
  .onclick = () => 
    // retry(getNegotiations, 3, 2000)
    retry(getNegotiations)
      .then(negotiations => {
        console.log(negotiations);
        alert('Operation complete!');
      })
      .catch(err => {
        console.log(err);
        alert('Operation failed!');
      });
