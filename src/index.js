const player1 = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0
};

const player2 = {
  NOME: "Peach",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 2,
  PONTOS: 0
};

const player3 = {
  NOME: "Yoshi",
  VELOCIDADE: 2,
  MANOBRABILIDADE: 4,
  PODER: 3,
  PONTOS: 0
};

const player4 = {
  NOME: "Bowser",
  VELOCIDADE: 5,
  MANOBRABILIDADE: 2,
  PODER: 5,
  PONTOS: 0
};

const player5 = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0
};

const player6 = {
  NOME: "Donkey Kong",
  VELOCIDADE: 2,
  MANOBRABILIDADE: 2,
  PODER: 5,
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
    if (block === "CONFRONTO") {
      let powerResults1 = diceResults1 + character1.PODER;
      let powerResults2 = diceResults2 + character2.PODER;
  
      console.log(`🥊${character1.NOME} confrontou o ${character2.NOME}!🥊`);
  
      await logRollResult(character1.NOME, "poder", diceResults1, character1.PODER);
      await logRollResult(character2.NOME, "poder", diceResults2, character2.PODER);
  
      if (powerResults1 > powerResults2) {
          if (character2.PONTOS > 0) {
              character2.PONTOS--;
              console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto!👀`);
          } else {
              console.log(`${character1.NOME} venceu o confronto, mas ${character2.NOME} não tinha pontos para perder.`);
          }
      } else if (powerResults2 > powerResults1) {
          if (character1.PONTOS > 0) {
              character1.PONTOS--;
              console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto!👀`);
          } else {
              console.log(`${character2.NOME} venceu o confronto, mas ${character1.NOME} não tinha pontos para perder.`);
          }
      } else {
          console.log("Confronto empatado! Nenhum ponto foi perdido.");
      }
  }




    if(totalTestSkiils1 > totalTestSkiils2){
      console.log(`${character1.NOME} marcou um ponto!`)
      character1.PONTOS++;
    } else if(totalTestSkiils2 > totalTestSkiils1){
      console.log(`${character2.NOME} marcou um ponto!`)
      character2.PONTOS++;
    }

    console.log("-----------------------------")

  }
}





async function declareWinner(character1, character2){

  console.log("Resultado Final: ")
  console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`); 
  console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

  if(character1.PONTOS > character2.PONTOS){
    console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆🏆🏆`)
  } else if(character2.PONTOS > character1.PONTOS){
    console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆🏆🏆`)
  } else console.log("A corrida deu empate! 🐱‍👤")

}







(async function main(){
  console.log(`🏁🚥 A corrida entre ${player1.NOME} e ${player2.NOME} vai começar ... 🏁🚥\n`);

  await playRaceEngine(player6, player4);
  await declareWinner(player6, player4)

})();
