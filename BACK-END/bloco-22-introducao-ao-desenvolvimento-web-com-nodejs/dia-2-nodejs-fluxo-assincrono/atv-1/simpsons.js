const fs = require('fs').promises;

const readAll = async () => {
  const response = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(response);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  strings.forEach((string) => console.log(string));
}

const searchCharacter = (id, file) => {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(file, (err, content) => {
      if(err) reject(err);
      else resolve(content);
    })
  })
}

const main = () => {
  readAll();
}

main();