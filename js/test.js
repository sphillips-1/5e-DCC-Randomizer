
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
  function GetBaseGP(GPFormula){
	var crGParray = GPFormula.split(";");
    var CP = rollAndCombineDice(crGParray[0])*.01;
    console.log("CP formula-" + crGParray[0]);
    console.log("CP:["+CP+"]");
    var SP = rollAndCombineDice(crGParray[1])*.1;
    console.log("SP formula-" + crGParray[1]);
    console.log("SP:["+SP+"]");
    var GP = rollAndCombineDice(crGParray[2]);
    console.log("GP formula-" + crGParray[2]);
	console.log("GP:["+GP+"]");
    var PP = rollAndCombineDice(crGParray[3])*10;
    console.log("PP formula-" + crGParray[3]);
    console.log("PP:["+PP+"]");
    var TotalGP = CP + SP + GP + PP;
    var MoneyArray = ["CP["+CP+"] SP["+SP+"] GP["+GP+"] PP["+PP+"]",TotalGP]
	return MoneyArray;
  }
  function GetMagicItems(LootFormula){
  	var magicItemArray = [];
  	if (LootFormula.split(";")[1].includes("Magic ltem Table")){
    	var magicItemFormula = LootFormula.split(";")[1]
        var magicItemDice = magicItemFormula.split("|")[0]
        var magicItemTable = magicItemFormula.split("|")[1]
		var magicItemDiceResults = rollAndCombineDice(magicItemDice)
		var table;
    	switch (magicItemFormula){
        case "Magic ltem Table A":
        	table = MagicTableA;
        	break;
        case "Magic ltem Table B":
        	break;
        case "Magic ltem Table C":
        	break;
        case "Magic ltem Table D":
        	break;
        case "Magic ltem Table E":
        	break;
        case "Magic ltem Table F":
        	break;
        case "Magic ltem Table G":
        	break;
        case "Magic ltem Table H":
        	break;
        case "Magic ltem Table I":
        	break;
        }
      	for (i = 0; i < magicItemDiceResults; i++) {
        	console.log(table[getRandomArbitrary(100)-1]);
        	magicItemArray.push(table[getRandomArbitrary(100)-1]);
    	}
    };
    return magicItemArray;
  }
  var ChallengeRatingGP = {"Challenge 0-4":"6d6*100;3d6*100;2d6*10;0d0*0","Challenge 5-10":"2d6*100;2d6*1000;6d6*100;3d6* 10","Challenge 11-16":"0d0*0;0d0*0;4d6*1000;5d6*100","Challenge 17+":"0d0*0;0d0*0;12d6*1000;8d6*1000"};
  
