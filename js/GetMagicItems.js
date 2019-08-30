
  function GetMagicItems(LootFormula){
	  
	var MagicItems={}
	
	
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

var MagicTableA = ["Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Potion of healing","Spell scroll (cantrip)","Spell scroll (cantrip)","Spell scroll (cantrip)","Spell scroll (cantrip)","Spell scroll (cantrip)","Spell scroll (cantrip)","Spell scroll (cantrip)","Spell scroll (cantrip)","Spell scroll (cantrip)","Spell scroll (cantrip)","Potion of climbing","Potion of climbing","Potion of climbing","Potion of climbing","Potion of climbing","Potion of climbing","Potion of climbing","Potion of climbing","Potion of climbing","Potion of climbing","Spell scroll (1st level)","Spell scroll (1st level)","Spell scroll (1st level)","Spell scroll (1st level)","Spell scroll (1st level)","Spell scroll (1st level)","Spell scroll (1st level)","Spell scroll (1st level)","Spell scroll (1st level)","Spell scroll (1st level)","Spell scroll (1st level)","Spell scroll (1st level)","Spell scroll (1st level)","Spell scroll (1st level)","Spell scroll (1st level)","Spell scroll (1st level)","Spell scroll (1st level)","Spell scroll (1st level)","Spell scroll (1st level)","Spell scroll (1st level)","Spell scroll (2nd leve l)","Spell scroll (2nd leve l)","Spell scroll (2nd leve l)","Spell scroll (2nd leve l)","Potion of greater healing","Potion of greater healing","Potion of greater healing","Potion of greater healing","Bag of holding","Driftglobe"];
