function GetMagicItems(LootFormula){
  	var magicItems;

  	//Magic Table #1
	var magicItem1Dice = rollAndCombineDice(LootFormula.MagicItemDice);  
	switch (LootFormula.MagicItemTable){
        case "Magic ltem Table A":
		for (i = 0; i < magicItem1Dice; i++) {
			magicItems.push(MagicTableA(getRandomArbitrary(100)));
    		}
        	break;
        case "Magic ltem Table B":
		for (i = 0; i < magicItem1Dice; i++) {
			magicItems.push(MagicTableA(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic ltem Table C":
		for (i = 0; i < magicItem1Dice; i++) {
			magicItems.push(MagicTableA(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic ltem Table D":
		for (i = 0; i < magicItem1Dice; i++) {
			magicItems.push(MagicTableA(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic ltem Table E":
		for (i = 0; i < magicItem1Dice; i++) {
			magicItems.push(MagicTableA(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic ltem Table F":
		for (i = 0; i < magicItem1Dice; i++) {
			magicItems.push(MagicTableA(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic ltem Table G":
		for (i = 0; i < magicItem1Dice; i++) {
			magicItems.push(MagicTableA(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic ltem Table H":
		for (i = 0; i < magicItem1Dice; i++) {
			magicItems.push(MagicTableA(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic ltem Table I":
		for (i = 0; i < magicItem1Dice; i++) {
			magicItems.push(MagicTableA(getRandomArbitrary(100)));
    		}	
        	break;
        }
	  


  	//Magic Table #2
  	var magicItem2Dice = rollAndCombineDice(LootFormula.MagicItemDice2);
	switch (LootFormula.MagicItemTable2){
        case "Magic ltem Table A":
		for (i = 0; i < magicItem2Dice; i++) {
			magicItems.push(MagicTableA(getRandomArbitrary(100)));
    		}
        	break;
        case "Magic ltem Table B":
		for (i = 0; i < magicItem2Dice; i++) {
			magicItems.push(MagicTableA(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic ltem Table C":
		for (i = 0; i < magicItem2Dice; i++) {
			magicItems.push(MagicTableA(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic ltem Table D":
		for (i = 0; i < magicItem2Dice; i++) {
			magicItems.push(MagicTableA(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic ltem Table E":
		for (i = 0; i < magicItem2Dice; i++) {
			magicItems.push(MagicTableA(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic ltem Table F":
		for (i = 0; i < magicItem2Dice; i++) {
			magicItems.push(MagicTableA(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic ltem Table G":
		for (i = 0; i < magicItem2Dice; i++) {
			magicItems.push(MagicTableA(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic ltem Table H":
		for (i = 0; i < magicItem2Dice; i++) {
			magicItems.push(MagicTableA(getRandomArbitrary(100)));
    		}	
        	break;
        case "Magic ltem Table I":
		for (i = 0; i < magicItem2Dice; i++) {
			magicItems.push(MagicTableA(getRandomArbitrary(100)));
    		}	
        	break;
        }
	return magicItems;
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
		magicItem =  "Driftglobe";
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
function getRandomArbitrary(max) {
    return Math.floor((Math.random() * max) + 1);
}

