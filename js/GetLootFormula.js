function GetLootFormula(challengeRating,d100){

  var table;
  switch (challengeRating){
        case "Challenge 0-4":
        	table = CR4LootTable;
        	break;
        case "Challenge 5-10":
          table = CR10LootTable;
        	break;
        case "Challenge 11-16":
          table = CR16LootTable;
        	break;
        case "Challenge 17+":
          table = CR17LootTable;
        	break;
        }
        
        var lootFormula = table[d100-1];
        //return lootFormula;
  
        var gpFormula = lootFormula.split(";")[0];
        var magicItemDice = lootFormula.split(";")[1].split("|")[0];
        var magicItemTable = lootFormula.split(";")[1].split("|")[1];
        
  
        var magicItemDice2; 
        
        If (typeOf lootFormula.split(";")[2].split("|")[0] === 'undefined'){
          magicItemDice2 = "";
        }else{
          magicItemDice2 = lootFormula.split(";")[2].split("|")[0];
        }
  
        var magicItemTable2;
        If (typeOf lootFormula.split(";")[2].split("|")[1] === 'undefined'){
          magicItemTable2 = "";
        }else{
          magicItemTable2 = lootFormula.split(";")[2].split("|")[1];
        }
  
  
        var lootFormulaObject = {GP:gpFormula, MagicItemFormula:magicItemDice, MagicItemTable:magicItemTable, MagicItemFormula2:magicItemDice2, MagicItemTable2:magicItemTable2};
        return lootFormulaObject;
}

var CR4LootTable = [";|",";|",";|",";|",";|",";|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*10;1d4|Magic ltem Table B","2d6*10;1d4|Magic ltem Table B","2d6*10;1d4|Magic ltem Table B","2d6*10;1d4|Magic ltem Table B","2d6*10;1d4|Magic ltem Table B","2d4*25;1d4|Magic ltem Table B","2d4*25;1d4|Magic ltem Table B","2d4*25;1d4|Magic ltem Table B","2d4*25;1d4|Magic ltem Table B","2d4*25;1d4|Magic ltem Table B","2d6*50;1d4|Magic ltem Table B","2d6*50;1d4|Magic ltem Table B","2d6*50;1d4|Magic ltem Table B","2d6*50;1d4|Magic ltem Table B","2d6*50;1d4|Magic ltem Table B","2d6*10;1d4|Magic ltem Table C","2d6*10;1d4|Magic ltem Table C","2d6*10;1d4|Magic ltem Table C","2d4*25;1d4|Magic ltem Table C","2d4*25;1d4|Magic ltem Table C","2d6*50;1d4|Magic ltem Table C","2d6*50;1d4|Magic ltem Table C","2d6*50;1d4|Magic ltem Table C","2d6*50;1d4|Magic ltem Table C","2d6*50;1d4|Magic ltem Table C","2d4*25;1d4|Magic ltem Table F","2d4*25;1d4|Magic ltem Table F","2d4*25;1d4|Magic ltem Table F","2d4*25;1d4|Magic ltem Table F","2d4*25;1d4|Magic ltem Table F","2d4*25;1d4|Magic ltem Table F","2d4*25;1d4|Magic ltem Table F","2d6*50;1d4|Magic ltem Table F","2d6*50;1d4|Magic ltem Table F","2d6*50;1d4|Magic ltem Table F","2d6*50;1d4|Magic ltem Table F","2d6*50;1d4|Magic ltem Table F","2d4*25;1d1|Magic ltem Table G","2d4*25;1d1|Magic ltem Table G","2d6*50;1d1|Magic ltem Table G"];
var CR10LootTable = [];
var CR16LootTable = [];
var CR17LootTable = [];


function CR4LootTableTest(){

  var table = [];
    
  for (; i < 6; i++) {
    table.push(";;;")
  }
  for (; i < 10; i++) {
    table.push("2d6*10;;;")
  }
  for (; i < 10; i++) {
    table.push("2d6*10;;;")
  }
  
  
}
