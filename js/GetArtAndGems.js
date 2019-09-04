function GetArtAndGems(dice){
    return rollAndCombineDice(dice);
    
  }
  

  function getRandomArbitrary(max) {
    return Math.floor((Math.random() * max) + 1);
  }
  function rollAndCombineDice(dice){
    var diceResults = [];
    var dice;
    var diceFormula = dice.split("d").join(",").split("*").join(",").split(",");
    var numberOfDice = diceFormula[0];
    var diceSize = diceFormula[1];
    for (i = 0; i < numberOfDice; i++) {
        diceResults.push(getRandomArbitrary(diceSize));
    }
    var diceTotal = parseInt(diceResults.reduce((a, b) => a + b, 0));
    if (typeof diceFormula[2] === 'undefined') {
  		diceFormula[2] = 1
	}
    diceTotal = diceTotal * diceFormula[2];
    return diceTotal;
  }