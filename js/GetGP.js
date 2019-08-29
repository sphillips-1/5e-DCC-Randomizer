function GetGP(GPFormula){
	
	var crGParray = GPFormula.split(";");
	
	
	var varCP = rollAndCombineDice(crGParray[0])*.01;
	var varSP = rollAndCombineDice(crGParray[1])*.1;
	var varGP = rollAndCombineDice(crGParray[2]);
	var varPP = rollAndCombineDice(crGParray[3])*10;
	var varTotalGP = varCP + varSP + varGP + varPP;
	
	var CPtoGP = ;
	var SPtoGP = ;
	var PPtoGP = ;
	
	
	var Currency = { CP:varCP ,SP:varSP ,GP:varGP, PP:varPP, Total:varTotalGP} 
	
	var MoneyArray = ["CP["+CP+"] SP["+SP+"] GP["+GP+"] PP["+PP+"]",TotalGP]
	return MoneyArray;
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
    console.log("Dice roll array ["+diceResults+"]");
    var diceTotal = parseInt(diceResults.reduce((a, b) => a + b, 0));
    if (typeof diceFormula[2] === 'undefined') {
  		diceFormula[2] = 1
	}
    diceTotal = diceTotal * diceFormula[2];
    return diceTotal;
  }
