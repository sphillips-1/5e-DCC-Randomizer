
  function GetMagicItems(LootFormula){
	  
  	var magicItem1Dice = rollAndCombineDice(LootFormula.MagicItemDice);
  	var magicItem2Dice = rollAndCombineDice(LootFormula.MagicItemDice2);		   

  	var magicItems;
	  

	for (i = 0; i < magicItem2Dice; i++) {
        	
    	}
	  
	switch (LootFormula.MagicItemTable){
        case "Magic ltem Table A":
		
		for (i = 0; i < magicItem1Dice; i++) {
        		MagicTableA
    		}
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
	  
	LootFormula.MagicItemTable
	LootFormula.MagicItemTable2
	  
	
	var magicItemArray = [];
  	if (LootFormula.split(";")[1].includes("Magic ltem Table")){
    	var magicItemFormula = LootFormula.split(";")[1]
        var magicItemDice = magicItemFormula.split("|")[0]
        var magicItemTable = magicItemFormula.split("|")[1]
		var magicItemDiceResults = rollAndCombineDice(magicItemDice)
		var table;

      	for (i = 0; i < magicItemDiceResults; i++) {
        	console.log(table[getRandomArbitrary(100)-1]);
        	magicItemArray.push(table[getRandomArbitrary(100)-1]);
    	}
    };
    return magicItemArray;
  }



function MagicTableA(d100){

	var magicItem;

	if(inRange(d100, 1, 50)) {
		magicItem =  "Potion of healing";
	} else if(inRange(d100,51,60)) {
		magicItem =  "Spell scroll (cantrip)";
	} else if(inRange(d100,61,70)){
		magicItem =  "Potion of climbing";
	} else if(inRange(d100,71,90)){
		magicItem =  "Spell Scroll (1st level)";
	} else if(inRange(d100,91,94)){
		magicItem =  "Spell Scroll (2nd level)";
	} else if(inRange(d100,95,98)){
		magicItem =  "Greater potion of healing";
	} else if(inRange(d100,99,99)){
		magicItem =  "Bag of holding";
	} else if(inRange(d100,100,100)){
		magicItem =  "Driftglobe;
	} 
	return magicItem;
}

function inRange(x, min, max) {
    return min <= x && x <= max;
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

