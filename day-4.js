const numeroAdivinha = 5;
let chute = "";
let acertou = false;

for(let contador = 0; contador < 3; contador++){    
    chute = prompt("Adivinhe o número de 0 a 10:");
    if(chute == numeroAdivinha){
        alert(`Parabéns, você adivinhou! O número era ${numeroAdivinha}.`);
        acertou = true;
        break;
    }
    alert("Número errado!");
}
if(!acertou){
    alert(`Infelizmente, você errou. O número era ${numeroAdivinha}!`);
}