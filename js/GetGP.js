function GetGP(challengeRating){
	
	var table;
	
	switch (challengeRating){
        case "Challenge 0-4":
        	table = CR4;
        	break;
        case "Challenge 5-10":
		table = CR10;
        	break;
        case "Challenge 11-16":
		table = CR16;
        	break;
        case "Challenge 17+":
		table = CR17;
        	break;
        }

	var varCP = rollAndCombineDice(table.CP);
	var varSP = rollAndCombineDice(table.SP);
	var varGP = rollAndCombineDice(table.GP);
	var varPP = rollAndCombineDice(table.PP);
	
	
	var CPtoGP = varCP*.01;
	var SPtoGP = varSP*.1;
	var PPtoGP = varPP*10;
	
	var varTotalGP = CPtoGP + SPtoGP + varGP + PPtoGP;
	
	var Currency = { CP:varCP ,SP:varSP ,GP:varGP, PP:varPP, Total:varTotalGP} 
	
	return Currency;
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


var CR4 = {CP:"6d6*100",SP:"3d6*100",GP:"2d6*10",PP:"0d0*0"};
var CR10 = {CP:"2d6*100",SP:"2d6*1000",GP:"6d6*100",PP:"3d6*10"};
var CR16 = {CP:"0d0*0",SP:"0d0*0",GP:"4d6*1000",PP:"5d6*100"};
var CR17 = {CP:"0d0*0",SP:"0d0*0",GP:"12d6*1000",PP:"8d6*1000"};
