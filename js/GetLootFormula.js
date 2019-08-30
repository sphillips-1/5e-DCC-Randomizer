function GetLootFormula(challengeRating,d100){

  console.log("d100=[" +d100 + "]");  
  
  var lootFormula;
  switch (challengeRating){
        case "Challenge 0-4":
        	lootFormula = CR4LootTable(d100);
        	break;
        case "Challenge 5-10":
			lootFormula = CR10LootTable(d100);
        	break;
        case "Challenge 11-16":
			lootFormula = CR16LootTable(d100);
        	break;
        case "Challenge 17+":
			lootFormula = CR17LootTable(d100);
        	break;
        }
        
        console.log("testing lootformula");
        console.log(lootFormula.ArtAndGemsGP);
        console.log("ending test on lootformula");
        return lootFormula;
}

function createFormulaObject(varArtAndGemsGP, varMagicItemDice, varMagicItemTable, varMagicItemDice2, varMagicItemTable2){
	
	var object = {ArtAndGemsGP: varArtAndGemsGP, 
	MagicItemDice:varMagicItemDice, 
	MagicItemTable:varMagicItemTable,
	MagicItemDice2:varMagicItemDice2,
	MagicItemTable2:varMagicItemTable2};
	return object;
}

function inRange(x, min, max) {
    return min <= x && x <= max;
}
function CR4LootTable(d100){

	var lootFormula;

	if(inRange(d100, 1, 6)) {
		lootFormula =  createFormulaObject("","","","","");
	} else if(inRange(d100,7,16)) {
		lootFormula =  createFormulaObject("2d6*10","","","","");
	} else if(inRange(d100,17,26)){
		lootFormula =  createFormulaObject("2d4*25","","","","");
	} else if(inRange(d100,27,36)){
		lootFormula =  createFormulaObject("2d6*50","","","","");
	} else if(inRange(d100,37,44)){
		lootFormula =  createFormulaObject("2d6*10","1d6","Magic Item Table A","","");
	} else if(inRange(d100,45,52)){
		lootFormula =  createFormulaObject("2d4*25","1d6","Magic Item Table A","","");
	} else if(inRange(d100,53,60)){
		lootFormula =  createFormulaObject("2d6*50","1d6","Magic Item Table A","","");
	} else if(inRange(d100,61,65)){
		lootFormula =  createFormulaObject("2d6*10","1d4","Magic ltem Table B","","");
	} else if(inRange(d100,66,70)){
		lootFormula =  createFormulaObject("2d4*25","1d4","Magic ltem Table B","","");
	} else if(inRange(d100,71,75)){
		lootFormula =  createFormulaObject("2d6*50","1d4","Magic ltem Table B","","");
	}else if(inRange(d100,76,78)){
		lootFormula =  createFormulaObject("2d4*10","1d4","Magic ltem Table C","","");
	} else if(inRange(d100,79,80)){
		lootFormula =  createFormulaObject("2d4*25","1d4","Magic ltem Table C","","");
	} else if(inRange(d100,81,85)){
		lootFormula =  createFormulaObject("2d6*50","1d4","Magic ltem Table C","","");
	} else if(inRange(d100,86,92)){
		lootFormula =  createFormulaObject("2d4*25","1d4","Magic ltem Table F","","");	
	} else if(inRange(d100,93,97)){
		lootFormula =  createFormulaObject("2d6*50","1d4","Magic ltem Table F","","");	
	} else if(inRange(d100,98,99)){
		lootFormula =  createFormulaObject("2d4*25","1d1","Magic ltem Table G","","");	
	} else if(inRange(d100,100,100)){
		lootFormula =  createFormulaObject("2d6*50","1d1","Magic ltem Table G","","");	
	}
	return lootFormula;
}

