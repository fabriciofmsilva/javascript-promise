// Error first-callback
const { writeFile } = require('fs');

writeFile('arquivo.txt', 'conteúdo do arquivo', err => {
  if(err) return console.log(err);

  console.log('arquivo criado com sucesso!');
}); 

// Promisificando a operação de escrita
const { writeFile } = require('fs');

function criaArquivo(nome, conteudo) {
  return new Promise((resolve, reject) => {
    writeFile('arquivo.txt', 'conteúdo do arquivo', err => {
      if(err) return reject(err);
        resolve();
      }); 		
    });
}

criaArquivo()
  .then(() => console.log('arquivo criado com sucesso!'))
  .catch(err => console.log(err));

// A magia de util.promisify
const { promisify } = require('util');
const { writeFile } = require('fs');

const writeFilePromisificado = promisify(writeFile);

writeFilePromisificado('arquivo.txt', 'conteúdo arquivo')
  .then(() => console.log('arquivo criado com sucesso!'))
  .catch(err => console.log(err));

// OR
const { promisify } = require('util');
const writeFile = promisify(require('fs').writeFile);

writeFile('arquivo.txt', 'conteúdo arquivo')
  .then(() => console.log('arquivo criado com sucesso!'))
  .catch(err => console.log(err));

// async/await
const { promisify } = require('util');
const writeFile = promisify(require('fs').writeFile);

(async function() {
  try {
    await writeFile('arquivo.txt', 'conteúdo arquivo');
    console.log('arquivo criado com sucesso!');
  } catch(err) {
    console.log(err);
  }
})();
