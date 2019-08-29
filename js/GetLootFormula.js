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
        return lootFormula;
}

var CR4LootTable = [";|",";|",";|",";|",";|",";|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d6*10;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d4*25;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*50;|","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d6*10;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d4*25;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*50;1d6|Magic Item Table A","2d6*10;1d4|Magic ltem Table B","2d6*10;1d4|Magic ltem Table B","2d6*10;1d4|Magic ltem Table B","2d6*10;1d4|Magic ltem Table B","2d6*10;1d4|Magic ltem Table B","2d4*25;1d4|Magic ltem Table B","2d4*25;1d4|Magic ltem Table B","2d4*25;1d4|Magic ltem Table B","2d4*25;1d4|Magic ltem Table B","2d4*25;1d4|Magic ltem Table B","2d6*50;1d4|Magic ltem Table B","2d6*50;1d4|Magic ltem Table B","2d6*50;1d4|Magic ltem Table B","2d6*50;1d4|Magic ltem Table B","2d6*50;1d4|Magic ltem Table B","2d6*10;1d4|Magic ltem Table C","2d6*10;1d4|Magic ltem Table C","2d6*10;1d4|Magic ltem Table C","2d4*25;1d4|Magic ltem Table C","2d4*25;1d4|Magic ltem Table C","2d6*50;1d4|Magic ltem Table C","2d6*50;1d4|Magic ltem Table C","2d6*50;1d4|Magic ltem Table C","2d6*50;1d4|Magic ltem Table C","2d6*50;1d4|Magic ltem Table C","2d4*25;1d4|Magic ltem Table F","2d4*25;1d4|Magic ltem Table F","2d4*25;1d4|Magic ltem Table F","2d4*25;1d4|Magic ltem Table F","2d4*25;1d4|Magic ltem Table F","2d4*25;1d4|Magic ltem Table F","2d4*25;1d4|Magic ltem Table F","2d6*50;1d4|Magic ltem Table F","2d6*50;1d4|Magic ltem Table F","2d6*50;1d4|Magic ltem Table F","2d6*50;1d4|Magic ltem Table F","2d6*50;1d4|Magic ltem Table F","2d4*25;1d1|Magic ltem Table G","2d4*25;1d1|Magic ltem Table G","2d6*50;1d1|Magic ltem Table G"];
var CR10LootTable = [];
var CR16LootTable = [];
var CR17LootTable = [];
