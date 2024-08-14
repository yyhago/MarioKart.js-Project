const player1 = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0
};

const player2 = { 
  NOME: "Yoshi",
  VELOCIDADE: 2,
  MANOBRABILIDADE: 4,
  PODER: 3,
  PONTOS: 0
};




async function rollDice(){ 
  return Math.floor(Math.random() * 6) + 1;
}




async function getRandomBlock(){
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
  }
  return result;
}




async function logRollResult(characterName, block, diceResult, attribute){
  console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
}




async function playRaceEngine(character1, character2){
  for(let round = 1; round <= 5; round++) {
    console.log(`🚗 Rodada: ${round}`);
    
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    let diceResults1 = await rollDice();
    let diceResults2 = await rollDice();
  
    let totalTestSkiils1 = 0
    let totalTestSkiils2 = 0
  
    if(block === "RETA"){
      totalTestSkiils1 = diceResults1 + character1.VELOCIDADE
      totalTestSkiils2 = diceResults2 + character2.VELOCIDADE
  
      await logRollResult(character1.NOME,
        "velocidade",
        diceResults1,
        character1.VELOCIDADE
      )
  
      await logRollResult(character2.NOME,
        "velocidade",
        diceResults2,
        character2.VELOCIDADE
      )
    }
    if(block === "CURVA"){
      totalTestSkiils1 = diceResults1 + character1.MANOBRABILIDADE
      totalTestSkiils2 = diceResults2 + character2.MANOBRABILIDADE
  
      await logRollResult(character1.NOME,
        "manobrabilidade",
        diceResults1,
        character1.MANOBRABILIDADE
      )
  
      await logRollResult(character2.NOME,
        "manobrabilidade",
        diceResults2,
        character2.MANOBRABILIDADE
      )
    }
    if(block === "CONFRONTO"){
      let powerResults1 = diceResults1 + character1.PODER
      let powerResults2 = diceResults2 + character2.PODER

      await logRollResult(character1.NOME,
        "poder",
        diceResults1,
        character1.PODER
      )
    
      await logRollResult(character2.NOME,
        "poder",
        diceResults2,
        character2.PODER
      )
    }
  }
}





(async function main(){
  console.log(`🏁🚥 A corrida entre ${player1.NOME} e ${player2.NOME} vai começar ... 🏁🚥\n`);

  await playRaceEngine(player1, player2);
})();
