const generatePassword = require('generate-password');

// Génération d'un mot de passe sécurisé
// Le mot de passe sera de 12 caractères, incluant des chiffres, des symboles
const password = generatePassword.generate({
  length: 12,         
  numbers: true,      
  symbols: true,      
  uppercase: true,    
  lowercase: true,    
  strict: true        
});

console.log("🔐 Mot de passe généré :", password);
// Enregistrer le mot de passe dans un fichier