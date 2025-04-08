async function getNewEquipment() {
    const randomItem = EquipmentList[Math.floor(Math.random() * EquipmentList.length)];
    console.log(randomItem.name);
    return randomItem;
}


function Equipment(name, category, type, AC, stealthDisadvantage, damage, notes) {
    return {
        name: name,
        category: category,
        type: type,
        ac: AC,
        stealthDisadvantage: stealthDisadvantage,
        damage: damage,
        notes: notes,
    };
}

const EquipmentList = [
    new Equipment('Robe','Armor', 'light', '10', false, 'N/A', null),
    new Equipment('Padded Armor','Armor', 'light', '11 + Dex Modifier', true, 'N/A', null),
    new Equipment('Leather Armor','Armor', 'light', '11 + Dex Modifier', false, 'N/A'),
    new Equipment('Studded Leather Armor','Armor', 'light', '12 + Dex Modifier', false, 'N/A', null),
    new Equipment('Hide Armor','Armor', 'medium', '12 + Dex Modifier', false, 'N/A', null),
    new Equipment('Chain Shirt Armor','Armor', 'medium', '13 + Dex Modifier', false, 'N/A', null),
    new Equipment('Scale Mail Armor','Armor', 'medium', '14 + Dex Modifier', true, 'N/A', null),
    new Equipment('Breastplate','Armor', 'medium', '14 + Dex Modifier', false, 'N/A', null),
    new Equipment('Half Plate Armor','Armor', 'medium', '15 + Dex Modifier', true, 'N/A', null),
    new Equipment('Ring Mail Armor','Armor', 'heavy', '14 + Dex Modifier', true, 'N/A', null),
    new Equipment('Chain Mail Armor','Armor', 'heavy', '16 + Dex Modifier', true, 'N/A', null),
    new Equipment('Splint Armor','Armor', 'heavy', '17 + Dex Modifier', true, 'N/A', null),
    new Equipment('Plate Armor','Armor', 'heavy', '18 + Dex Modifier', true, 'N/A', null),
    new Equipment('Shield','Armor', 'shield', '2', false, 'N/A', null),

    new Equipment('+1','Weapon', 'Bonus', null, false, '+1 to hit | + 1 dmg', 'Apply this to any weapon to improve it.'),


    new Equipment('Club', 'Weapon','Light',null, null, '1d4 bludgeoning', null),
    new Equipment('Dagger', 'Weapon','Finesse',null, null, '1d4 piercing', 'light | thrown (range 20/60)'),
    new Equipment('Greatclub','Weapon', 'Two-handed',null, null, '1d8 bludgeoning', null),
    new Equipment('Handaxe','Weapon', 'Light',null, null, '1d6 slashing', 'light | thrown (range 20/60)'),
    new Equipment('Javelin','Weapon', 'Thrown (range 30/120)',null, null, '1d6 piercing', null),
    new Equipment('Light hammer','Weapon', 'Light',null, null, '1d4 bludgeoning', 'light | thrown (range 20/60)'),
    new Equipment('Mace','Weapon',null, null, null, '1d6 bludgeoning', null),
    new Equipment('Quarterstaff','Weapon',null,null, '1d6 bludgeoning', 'Versatile 1d8 bludgeoning'),
    new Equipment('Sickle','Weapon', 'Light',null, null, '1d4 slashing', null),
    new Equipment('Spear','Weapon', 'Thrown (range 20/60)',null, null, '1d6 piercing', 'Versatile (1d8)'),
    new Equipment('Light Crossbow','Weapon',null, null, 'Ammunition (range 80/320)', '1d8 piercing', 'loading | two-handed'),
    new Equipment('Dart', 'Weapon','Finesse',null, null, '1d4 piercing', 'thrown (range 20/60)'),
    new Equipment('Shortbow', 'Weapon','Ammunition (range 80/320)',null, null, '1d6 piercing', 'two-handed'),
    new Equipment('Sling','Weapon', 'Ammunition (range 30/120)',null, null, '1d4 bludgeoning', null),
    new Equipment('Battleaxe', 'Weapon',null ,null, null, '1d8 slashing', 'Versatile (1d10)' ),
    new Equipment('Flail','Weapon', null, null, null, '1d8 bludgeoning', null),
    new Equipment('Glaive', 'Weapon','Heavy',null, null, '1d10 slashing', 'reach | two-handed'),
    new Equipment('Greataxe', 'Weapon','Heavy',null, null, '1d12 slashing', 'two-handed'),
    new Equipment('Greatsword', 'Weapon','Heavy', null, null,'2d6 slashing', 'two-handed'),
    new Equipment('Halberd', 'Weapon','Heavy',null, null, '1d10 slashing', 'reach | two-handed'),
    new Equipment('Lance', 'Weapon','Reach', null, null,'1d12 piercing', 'special'),
    new Equipment('Longsword', 'Weapon',null, null,'Versatile (1d10)', '1d8 slashing', null),
    new Equipment('Maul', 'Weapon','Heavy',null, null, '2d6 bludgeoning',  'two-handed'),
    new Equipment('Morningstar','Weapon',null, null, null, '1d8 piercing',  null),
    new Equipment('Pike', 'Weapon','Heavy',null, null, '1d10 piercing',  'reach | two-handed'),
    new Equipment('Rapier', 'Weapon','Finesse',null, null, '1d8 piercing',  null),
    new Equipment('Scimitar', 'Weapon','Finesse',null, null, '1d6 slashing',  'light'),
    new Equipment('Shortsword','Weapon', 'Finesse',null, null, '1d6 piercing',  'light'),
    new Equipment('Trident', 'Weapon','Thrown (range 20/60)',null, null, '1d6 piercing', 'versatile (1d8)'),
    new Equipment('War pick','Weapon', null,null, null, '1d8 piercing', null),
    new Equipment('Warhammer', 'Weapon','Versatile (1d10)',null, null, '1d8 bludgeoning', null),
    new Equipment('Whip', 'Weapon','Finesse',null, null, '1d4 slashing', 'reach'),
    new Equipment('Blowgun','Weapon', 'Ammunition (range 25/100)', null, null,'1 piercing', 'loading'),
    new Equipment('Hand Crossbow', 'Weapon','Ammunition (range 30/120)',null, null, '1d6 piercing',  'light | loading'),
    new Equipment('Heavy Crossbow','Weapon', 'Ammunition (range 100/400)',null, null, '1d10 piercing', 'heavy | loading | two-handed'),
    new Equipment('Longbow','Weapon', 'Ammunition (range 150/600)', null, null, '1d8 piercing', 'heavy | two-handed'),
    new Equipment('Net', 'Weapon','Special',null, null, null, 'thrown (range 5/15)'),
];