function GetPlaybookMove() {


	return getRandom(getRandom(moves));
}

var moves = [

//chosen
    [

        "Destiny’s Plaything: At the beginning of each mystery, roll +Weird to see what is revealed about your immediate future. On a 10+, the Keeper will reveal a useful detail about the coming mystery. On a 7-9 you get a vague hint about it. On a miss, something bad is going to happen to you.",
        "I’m Here For A Reason: There’s something you are destined to do. Work out the details with the Keeper, based on your fate. You cannot die until it comes to pass. If you die in play, then you must spend a Luck point. You will then, somehow, recover or be returned to life. Once your task is done (or you use up all your Luck), all bets are off.",
        "The Big Entrance: When you make a showy entrance into a dangerous situation, roll +Cool. On 10+ everyone stops to watch and listen until you finish your opening speech. On a 7-9, you pick one person or monster to stop, watch and listen until you finish talking. On a miss, you’r",
        "Devastating: When you inflict harm, you may inflict +1 harm",
        "Dutiful: When your fate rears its ugly head, and you act in accordance with any of your fate tags (either heroic or doom) then mark experience. If it’s a heroic tag, take +1 forward.",
        "Invincible: You always count as having 2-armour. This doesn’t stack with other protection.",
        "Resilience: You heal faster than normal people. Any time your harm gets healed, heal an extra point. Additionally, your wounds count as 1-harm less for the purpose of the Keeper’s harm moves."

    ],

//crooked
    [
        "Artifact: You ‘found’ a magical artifact with handy powers, andkept it. Pick one: Protective amulet (1-armour magic recharge),Lucky charm (may be used as a Luck point, once only), Grimoire(studying the book gives +1 forward to use magic), Skeleton key(opens any magically sealed lock), Imp stone (A weak demon isbound to serve the holder. The imp must be summoned with theuse magic move).",
        "Crew: You have a regular crew, a team of three or four peoplewho will help you out with pretty much anything. They count asa team (see page 119).",
        "Deal with the Devil: You sold your soul to the Devil. Pick one ortwo things you got out of the deal: wealth, fame, youth, sensualgratification, skill (add +1 to two ratings). Payment is due eitherwhen you die, in six months (if you picked two things) or otherwise in a year.",
        "Friends on the Force: You know a few cops who can be persuadedto look the other way, or do you a favour, for certain considerations. You can act under pressure to get in touch with themwhen you need to divert any law enforcement attention. Therewill be a cost, although maybe not right now.",
        "Made: You’re “made” in a gang. Name the gang and describehow their operations tie into your background. You can call ongang members to help you out, but they’ll expect to be paid. Yourbosses will have requests for you now and again, but you’ll be paid.Minor trouble will be overlooked, but you better not screw overany other made gangsters.",
        "Driver: You have +1 ongoing while driving, plus you can hotwireanything (the older it is, the fewer tools you need to do it). Youalso own two handy, widely-available vehicles (perhaps a sportscar and a van).",
        "Home Ground: Your crew made a point of keeping the localshappy - keeping them safe, ensuring things always went downokay. When you’re back in your old neighbourhood, you canalways find people who will hide you or help you with a minorfavour, no questions asked.",
        "Notorious: You have a reputation from your criminal past. Whenyou reveal who you are, your terrifying reputation countsas a reason for people to do what you ask, for the manipulatesomeone move. Revealing your identity to someone can createother problems later, of course."
    ],

//divine
    [ 
        "Boss from Beyond: At the beginning of each mystery, roll+Weird. On a 10+, your Superiors ask you to do something simple.On a 7-9, they ask you to do something complicated or difficult.In either case, you get to ask them one of the questions fromthe investigate a mystery move right now. On a miss, you arerequired to do something terrible. If you do not accomplish whatthey’ve ordered, you cannot use this move again until you havemade up for your failure.",
        "Angel Wings: You can go instantly to anywhere you’ve visitedbefore, or to a person you know well. When you carry one ortwo people with you, roll +Weird. On a 10+ you all go where youwanted. On a 7-9, you don’t quite manage it. Either you are allseparated, or you all appear in the wrong place.",
        "What I Need, When I Need It: You may store any small objectyou own, putting it into a magical space nobody can get to. Youmay retrieve anything you stored at any time; it appears in yourhand.",
        "Soothe: When you talk to someone for a few seconds in aquiet voice, you can calm them down, blocking any panic, anger,or other negative emotions they have. This works even if the thingthat freaked them out is still present, as long as your voice can beheard.",
        "Lay On Hands: Your touch can heal injury and disease. Whenyou lay your hands on someone hurt, roll +Cool. On a 10+, heal2 harm or an illness, plus they’re stabilized. On a 7-9, you can healthe harm or illness as on a 10+, but you take it into yourself. On amiss, your aura causes them extra harm.",
        "Cast Out Evil: You may banish an unnatural creature fromyour presence. Roll +Tough. On a 10+ it is banished. On a 7-9 ittakes a little while for the banishing to take effect—the creaturehas time to make one or two actions. Either way, the banishedcreature is unharmed, and you have no control over where it goes.This move may be used on unnatural hunters (e.g. the Monstrous).On a miss, something is keeping it here. That’s bad.",
        "Smite: Your body and divine weapon always count as a weaknessagainst the monsters you fight. Your unarmed attacks are 2-harmintimate hand messy"
    ],

//expert
    [
        "I’ve Read About This Sort Of Thing: Roll +Sharp instead of+Cool when you act under pressure.",
        "Often Right: When a hunter comes to you for advice about aproblem, give them your honest opinion and advice. If they takeyour advice, they get +1 ongoing while following your advice, andyou mark experience.",
        "Preparedness: When you need something unusual or rare, roll+Sharp. On a 10+, you have it here right now. On a 7-9 you have it,but not here: it will take some time to get it. On a miss, you knowwhere it is, but it’s somewhere real bad.",
        "It Wasn’t As Bad As It Looked: Once per mystery, you mayattempt to keep going despite your injuries. Roll +Cool. On a10+, heal 2 harm and stabilize your wounds. On a 7-9 you mayeither stabilize or heal 1 harm. On a miss, it was worse than itlooked: the Keeper may inflict a harm move on you, or make yourwounds unstable.",
        "Precise Strike. When you inflict harm on a monster, you can aimfor a weak spot. Roll +Tough. On a 10+ you inflict +2 harm. Ona 7-9 you inflict +1 harm. On a miss, you leave yourself open forthe monster to hit you.",
        "The Woman (or Man) With The Plan: At the beginning of eachmystery, roll +Sharp. On a 10+ hold 2, on a 7-9 hold 1. Spend thehold to be where you need to be, prepared and ready. On a miss,the Keeper holds 1 they can spend to have you be in the worstplace, unprepared and unready.",
        "Dark Past: You dabbled in the worst sort of mystical arts beforeyou became one of the good guys. If you trawl through yourmemories for something relevant to the case at hand, roll +Weird.On a 10+ ask the Keeper two questions from the list below. Ona 7-9 ask one. On a miss, you can ask a question anyway but thatwill mean you were personally complicit in creating the situationyou are now dealing with. The questions are:• When I dealt with this creature (or one of its kind), what didI learn?• What black magic do I know that could help here?• Do I know anyone who might be behind this?• Who do I know who can help us right now?",
        "Haven: You have set up a haven, a safe place to work. Pick three of the options for your haven."
    ]
]    


function getRandom(array){
    return array[Math.floor(Math.random()*array.length)];
}