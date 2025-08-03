const fs = require('fs');

// Création d'un fichier hello.txt avec le contenu "Hello Node"
fs.writeFile('hello.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('Fichier hello.txt créé avec succès.');
    
  fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Erreur lors de la lecture de hello.txt:', err.message);
    } else {
      console.log('Contenu de hello.txt:', data);
    }
  });
});
