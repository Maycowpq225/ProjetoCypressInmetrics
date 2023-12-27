Cypress.Commands.add('gerarNomeAleatorio', () => {
    let listaNomes = require('../fixtures/listaNomes.json').nomes;
    return listaNomes[Math.floor(Math.random() * listaNomes.length)]; 
});

Cypress.Commands.add('gerarEmailAleatorio', (nome) => {
    const min = 100000000;
    const max = 999999999;

    const random9DigitNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return nome + random9DigitNumber + "@hotmail.com";
});

Cypress.Commands.add('gerarSenhaAleatoria', () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numericChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    const allChars = uppercaseChars + lowercaseChars + numericChars + specialChars;

    let password = '';
    for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }
    
    return password;
});