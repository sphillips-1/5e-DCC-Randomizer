function GetRandomSkyrimAdventure() {

	return getRandom(adventures);
}

var adventures = [

    "Hoarder - You keep everything you find",
    "Glutton - You must immediatly eat any conmsumable you find.",
    "Greed - ",
    "I hate swords - No swords!",
    "Superstitious - No magic, enchanted weapons, or enchanted armor",
    "Not the Dragonborn - No shouting!",
    "Fruit Salesmen - Collects and sales only fruit",
    "No metal - No metal weapons or armor",
    "Librarian - Collect all books. Don't sell any!"

]

function getRandom(array){
    return array[Math.floor(Math.random()*array.length)];
}




