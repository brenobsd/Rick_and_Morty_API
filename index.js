// URL da API
const url = 'https://rickandmortyapi.com/api/character';

// Fazendo a requisição GET para a API
fetch(url)
  .then(response => {
    // Verifica se a requisição foi bem-sucedida
    if (!response.ok) {
      throw new Error('Erro na requisição: ' + response.status);
    }
    // Converte a resposta em JSON
    return response.json();
  })
  .then(data => {
    // Aqui você pode acessar os personagens
    console.log(data.results); // Exibe os personagens no console

    // Exibindo os personagens na página
    data.results.forEach(character => {
      console.log(`Nome: ${character.name}`);
      console.log(`Status: ${character.status}`);
      console.log(`Espécie: ${character.species}`);
      console.log('-------------------------');
    });
  })
  .catch(error => {
    // Lida com erros de requisição
    console.error('Erro:', error);
  });
