function GetLootFormula(challengeRating,d100){

  console.log("d100=[" +d100 + "]");  
  
  var table;
  switch (challengeRating){
        case "Challenge 0-4":
        	table = CR4LootTable();
        	break;
        case "Challenge 5-10":
          table = CR10LootTable();
        	break;
        case "Challenge 11-16":
          table = CR16LootTable();
        	break;
        case "Challenge 17+":
          table = CR17LootTable();
        	break;
        }
        
        var lootFormula = table[d100-1];
        console.log("testing lootformula");
        console.log(lootFormula(0));
        console.log("ending test on lootformula");
        return lootFormula;
}

//var CR4LootTable = [";|",";|",";|",";|",";|",";|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*10;1d4|Magic ltem Table B","2d6*10;1d4|Magic ltem Table B","2d6*10;1d4|Magic ltem Table B","2d6*10;1d4|Magic ltem Table B","2d6*10;1d4|Magic ltem Table B","2d4*25;1d4|Magic ltem Table B","2d4*25;1d4|Magic ltem Table B","2d4*25;1d4|Magic ltem Table B","2d4*25;1d4|Magic ltem Table B","2d4*25;1d4|Magic ltem Table B","2d6*50;1d4|Magic ltem Table B","2d6*50;1d4|Magic ltem Table B","2d6*50;1d4|Magic ltem Table B","2d6*50;1d4|Magic ltem Table B","2d6*50;1d4|Magic ltem Table B","2d6*10;1d4|Magic ltem Table C","2d6*10;1d4|Magic ltem Table C","2d6*10;1d4|Magic ltem Table C","2d4*25;1d4|Magic ltem Table C","2d4*25;1d4|Magic ltem Table C","2d6*50;1d4|Magic ltem Table C","2d6*50;1d4|Magic ltem Table C","2d6*50;1d4|Magic ltem Table C","2d6*50;1d4|Magic ltem Table C","2d6*50;1d4|Magic ltem Table C","2d4*25;1d4|Magic ltem Table F","2d4*25;1d4|Magic ltem Table F","2d4*25;1d4|Magic ltem Table F","2d4*25;1d4|Magic ltem Table F","2d4*25;1d4|Magic ltem Table F","2d4*25;1d4|Magic ltem Table F","2d4*25;1d4|Magic ltem Table F","2d6*50;1d4|Magic ltem Table F","2d6*50;1d4|Magic ltem Table F","2d6*50;1d4|Magic ltem Table F","2d6*50;1d4|Magic ltem Table F","2d6*50;1d4|Magic ltem Table F","2d4*25;1d1|Magic ltem Table G","2d4*25;1d1|Magic ltem Table G","2d6*50;1d1|Magic ltem Table G"];
var CR10LootTable = [];
var CR16LootTable = [];
var CR17LootTable = [];


function createFormulaObject(varArtAndGemsGP, varMagicItemDice, varMagicItemTable, varMagicItemDice2, varMagicItemTable2){
  var object = {ArtAndGemsGP:varArtAndGemsGP, MagicItemDice:varMagicItemDice, MagicItemTable:varMagicItemTable, MagicItemDice2:varMagicItemDice2, MagicItemTable2:varMagicItemTable2};
  return object;
}

function CR4LootTable(){

  var table = [];
  var i;
    
  for (; i < 6; i++) {
    table.push(new createFormulaObject("","","","",""));
  }
  for (; i < 10; i++) {
    table.push(new createFormulaObject("2d6*10","","","",""));
  }
  for (; i < 10; i++) {
    table.push(new createFormulaObject("2d4*25","","","",""));
  }
  for (; i < 10; i++) {
	table.push(new createFormulaObject("2d6*50","","","",""));
  }
  for (; i < 8; i++) {
	table.push(new createFormulaObject("2d6*10","1d6","Magic Item Table A","",""));
  }
  for (; i < 8; i++) {
    table.push(new createFormulaObject("2d4*25","1d6","Magic Item Table A","",""));
  }
  for (; i < 8; i++) {
	table.push(new createFormulaObject("2d6*50","1d6","Magic Item Table A","",""));
  }
  for (; i < 5; i++) {
	table.push(new createFormulaObject("2d6*10","1d4","Magic ltem Table B","",""));
  }
  for (; i < 5; i++) {
	table.push(new createFormulaObject("2d4*25","1d4","Magic ltem Table B","",""));
  }
  for (; i < 5; i++) {
	table.push(new createFormulaObject("2d6*50","1d4","Magic ltem Table B","",""));	  
  }
  for (; i < 5; i++) {
	table.push(new createFormulaObject("2d4*25","1d4","Magic ltem Table C","",""));	  	  
  }
  for (; i < 5; i++) {
	table.push(new createFormulaObject("2d6*50","1d4","Magic ltem Table C","",""));	  	  	  
  }
  for (; i < 7; i++) {
	table.push(new createFormulaObject("2d4*25","1d4","Magic ltem Table F","",""));	  	  
  }
  for (; i < 5; i++) {
	table.push(new createFormulaObject("2d6*50","1d4","Magic ltem Table F","",""));	
  }  
  for (; i < 2; i++) {
	table.push(new createFormulaObject("2d4*25","1d1","Magic ltem Table G","",""));	
  } 
  
  for (; i < 2; i++) {
	table.push(new createFormulaObject("2d6*50","1d1","Magic ltem Table G","",""));	
  } 
  
  return table;
}

