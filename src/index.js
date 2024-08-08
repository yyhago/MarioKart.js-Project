const player1 = { // Criação dos objetos - players
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0
};

const player2 = { // Criação dos objetos - players
  NOME: "Yoshi",
  VELOCIDADE: 2,
  MANOBRABILIDADE: 4,
  PODER: 3,
  PONTOS: 0
};

async function rollDice(){ // Função matemática para calcular os lados de um dado
  return Math.floor(Math.random() * 6) + 1;
}

(async function main(){
  console.log(`🏁🚨 A corrida entre ${player1.NOME} e ${player2.NOME} vai começar ... 🏁🚨\n`);
})()