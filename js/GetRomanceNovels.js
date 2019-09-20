function GetNovelNames() {

    //# of books

    var novelNames = [];

    var novelName;

    var determiner;
    var descriptor;

    var i;
    for (i = 0; i < 5; i++) {


        determiner = getRandom(Part1);
        descriptor = getRandom(Part2);

        if(determiner === "A(n)" && isVowel(descriptor.charAt(0))){
            determiner = "An";
        } else {
            determiner = "A";
        }


        novelName = determiner + " " + descriptor + " " + getRandom(Part3) + " " + getRandom(Part4);
        novelNames.push(novelName);

    }

	return novelNames;
}

function isVowel(x) {  return /[aeiouAEIOU]/.test(x); }

function getRandom(array){
    return array[Math.floor(Math.random()*array.length)];
}

//Part 1 of title, determiner
var Part1 = ["A(n)","The"];

//Part 2 of title - descriptor
var Part2 = ["Surrendering","Impenetrable","Sentimental","Unbreakable",
                "Cooperative","Magnificent","Penetrating","Sensational",
                "Astonishing","Passionate","Mysterious","Delightful",
                "Aggressive","Victorious","Performers","Penetrated",
                "Determined","Attractive","Accidental","Unyielding",
                "Wonderful","Imprinted","Cherished","Inscribed",
                "Demanding","Treasured","Reluctant","Worshiped","Sparkling",
                "Vivacious","Beautiful","Energetic","Thrilling","Animistic",
                "Desperate","Admiring","Stripped","Romantic","Intimate",
                "Precious","Cavalier","Scorched","Delicate","Mindless",
                "Careless","Carefull","Reverent","Chemical","Dominant",
                "Vigorous","Fearless","Alluring","Handsome","Opposite",
                "Puckered","Generous","Grateful","Splendid","Talented",
                "Fighting","Physical","Pleasant","Ravaging","Tempting",
                "Diligent","Dazzling","Victim’s","Spirited","Original",
                "Dripping","Charming","Heavenly","Virginal","Powerful",
                "Intense","Vicious","Damaged","Favored","Dearest","Violent",
                "Gallant","Darling","Admired","Desired","Devoted","Lustful",
                "Revered","Captive","Amazing","Extreme","Elegant","Sexual",
                "Exposed","Glowing","Shining","Special","Selfish","Jealous",
                "Aroused","Excited","Leather","Muscled","Perfect","Bulging",
                "Ignited","Pulsing","Crushed","Trusted","Beloved","Prized",
                "Heated","Tender","Loving","Carnal","Erotic","Adored","Lovely",
                "Sexual","Bright","Strong","Ripped","French","Honest","Mutual",
                "Common","Exotic","Young","Crazy","Firey","Close","Fated",
                "Blind","Brave","Ideal","Angry","Naked","Rough","Eager","Roped",
                "Alpha","Cruel","Bound","Deep","True","Wild","Bare","Pure","Bold",
                "Dark","Rare","Tied","Hard","Sexy","Hot"];

//Part 3 of title - Fantasy races
var Part3 = ["Dragonborn","Dwarf","Elf","Gnome","Half Elf",
                "Half Orc","Halfling","Human","Tiefling",
                "Aarakocra","Aasimar","Bug Bear","Firbolg",
                "Goblin","Grung","Hobgoblin","Kenku","Kobold",
                "Lizardfolk","Orc","Tabaxi","Triton",
                "Yuan-Ti Pureblood","Gith","Changeling","Eladrin",
                "Genasi","Goliath","Minotaur ","Shifter","Warforged"];

//Part 4 of title - class, role, job
var Part4 = ["Actor","Advocate (Lawyer)","Alchemist","Animal Handler",
                "Apothecary","Architect","Archer","Archivist","Aristocrat",
                "Armorer","Artisan","Artist","Astrologer","Baker","Banker",
                "Barbarian","Barber","Bard","Barkeep","Barmaid","Beekeeper",
                "Beer Seller","Beggar","Blacksmith","Boatman","Bookbinder",
                "Bookseller","Brewer","Bricklayer","Brick Maker","Brigand",
                "Brothel Keeper","Buckle Maker","Builder","Butcher","Caravan Leader",
                "Carpenter","Cartographer","Chandler","Charioteer","Chatelaine",
                "Chef","Chieftain","Chirurgeon","Clergyman","Clerk","Clock Maker",
                "Clothworker","Cobbler","Commander","Concubine","Cook","Cooper",
                "Copyist","Costermonger","Counselor","Courtesan","Courtier",
                "Cowherd","Crossbowman","Cutler","Daimyo","Dairymaid","Dancer",
                "Dictator","Diplomat","Distiller","Diver","Diviner","Doctor",
                "Domestic Servant","Emperor/Empress","Eunuch","Explorer","Farmer",
                "Fighter","Fisherman","Fishmonger","Footman","Furrier","Galley Slave",
                "Gardener","Geisha","General","Gladiator","Glovemaker","Goldsmith",
                "Grocer","Groom","Guardsman","Guildmaster","Harness maker","Hatmaker",
                "Hay merchant","Healer","Hearthwitch","Herald","Herbalist","Herder",
                "Hermit","Highwayman","Historian","Housemaid","Hunter","Illuminator",
                "Infantryman","Innkeeper","Interpreter","Inventor","Jailer","Jester",
                "Jeweler","Jongleur","Judge","King","Kitchen drudge","Knight","Laborer",
                "Lady","Lady in Waiting","Leatherworker","Librarian","Linguist",
                "Locksmith","Longbowman","Longshoreman","Lord","Maidservant","Majordomo",
                "Man at Arms","Mason","Masseur","Mayor","Mercer","Merchant","Messenger",
                "Midwife","Miller","Miner","Minister","Minstrel","Monk","Mortician",
                "Mourner","Musician","Necromancer","Noble","Nun","Nurse","Old-clothes seller",
                "Page","Painter","Pariah","Pastry cook","Peasant","Perfumer","Philosopher",
                "Physician","Pigkeeper","Pilgrim","Pirate","Plasterer","Potter","Priest/ess",
                "Prince/ss","Privateer","Professor","Prostitute","Pursemaker","Queen","Ranger",
                "Ratcatcher","Reeve","Ronin","Roofer","Ropemaker","Royal Adviser","Rugmaker",
                "Ruler","Saddler","Sailor","Samurai","Scabbard maker","Sculptor","Scavenger",
                "Scholar","Scrivener","Seamstress","Servant","Shaman","Shepherd","Ship's captain",
                "Shoemaker","Silversmith","Slave","Slaver","Smith","Soldier","Sorcerer/Sorceress",
                "Spice Merchant","Squire","Stablehand","Stevedore","Stonemason","Storyteller",
                "Steward","Street kid","Street seller","Street sweeper","Student","Surgeon",
                "Surveyor","Swordsman","Sycophant","Tailor","Tanner","Tavernkeeper","Tax collector",
                "Teacher","Teamster","Thatcher","Thief","Tinker","Torturer","Town crier",
                "Toymaker","Trapper","Vendor","Vermin catcher","Veterinarian","Village chief",
                "Vintner","Viking","Warlock","Warrior","Water carrier","Weaver","Wetnurse",
                "Wine seller","Witch","Wizard","Woodcarver","Woodcutter","Wood seller","Wrestler","Writer"];



