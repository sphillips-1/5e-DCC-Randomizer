async function getNewEquipment() {
    const randomItem = EquipmentList[Math.floor(Math.random() * EquipmentList.length)];
    return randomItem;
}


function Equipment(name, category, type, AC, stealthDisadvantage, damage, notes) {
    this.name = name
    this.category = category
    this.type = type
    this.ac = AC
    this.stealthDisadvantage = stealthDisadvantage
    this.damage = damage
    this.notes = notes
}

const EquipmentList = {
    Robe: new Equipment('Robe', 'light', '10', false, 'N/A'),
    Padded: new Equipment('Padded Armor', 'light', '11 + Dex Modifier', true, 'N/A'),
    Leather: new Equipment('Leather Armor', 'light', '11 + Dex Modifier', false, 'N/A'),
    StuddedLeather: new Equipment('Studded Leather Armor', 'light', '12 + Dex Modifier', false, 'N/A'),
    Hide: new Equipment('Hide Armor', 'medium', '12 + Dex Modifier', false, 'N/A'),
    ChainShirt: new Equipment('Chain Shirt Armor', 'medium', '13 + Dex Modifier', false, 'N/A'),
    ScaleMail: new Equipment('Scale Mail Armor', 'medium', '14 + Dex Modifier', true, 'N/A'),
    Breastplate: new Equipment('Breastplate', 'medium', '14 + Dex Modifier', false, 'N/A'),
    HalfPlate: new Equipment('Half Plate Armor', 'medium', '15 + Dex Modifier', true, 'N/A'),
    RingMail: new Equipment('Ring Mail Armor', 'heavy', '14 + Dex Modifier', true, 'N/A'),
    ChainMail: new Equipment('Chain Mail Armor', 'heavy', '16 + Dex Modifier', true, 'N/A'),
    Splint: new Equipment('Splint Armor', 'heavy', '17 + Dex Modifier', true, 'N/A'),
    Plate: new Equipment('Plate Armor', 'heavy', '18 + Dex Modifier', true, 'N/A'),
    Shield: new Equipment('Shield', 'shield', '2', false, 'N/A'),
    Club: new Equipment('Club', 'Light', '1d4 bludgeoning', null),
    Dagger: new Equipment('Dagger', 'Finesse', '1d4 piercing', null, 'light, thrown (range 20/60)'),
    Greatclub: new Equipment('Greatclub', 'Two-handed', '1d8 bludgeoning', null, null),
    Handaxe: new Equipment('Handaxe', 'Light', '1d6 slashing', null, 'light, thrown (range 20/60)'),
    Javelin: new Equipment('Javelin', 'Thrown (range 30/120)', '1d6 piercing', null, null),
    LightHammer: new Equipment('Light hammer', 'Light', '1d4 bludgeoning', null, 'light, thrown (range 20/60)'),
    Mace: new Equipment('Mace', null, '1d6 bludgeoning', null, null),
    Quarterstaff: new Equipment('Quarterstaff', 'Versatile (1d8)', '1d6 bludgeoning', null, null),
    Sickle: new Equipment('Sickle', 'Light', '1d4 slashing', null, null),
    Spear: new Equipment('Spear', 'Thrown (range 20/60)', '1d6 piercing', null, 'versatile (1d8)'),
    LightCrossbow: new Equipment('Crossbow, light', 'Ammunition (range 80/320)', '1d8 piercing', null, 'loading, two-handed'),
    Dart: new Equipment('Dart', 'Finesse', '1d4 piercing', null, 'thrown (range 20/60)'),
    Shortbow: new Equipment('Shortbow', 'Ammunition (range 80/320)', '1d6 piercing', null, 'two-handed'),
    Sling: new Equipment('Sling', 'Ammunition (range 30/120)', '1d4 bludgeoning', null, null),
    Battleaxe: new Equipment('Battleaxe', 'Versatile (1d10)', '1d8 slashing', null, null),
    Flail: new Equipment('Flail', null, '1d8 bludgeoning', null, null),
    Glaive: new Equipment('Glaive', 'Heavy', '1d10 slashing', null, 'reach, two-handed'),
    Greataxe: new Equipment('Greataxe', 'Heavy', '1d12 slashing', null, 'two-handed'),
    Greatsword: new Equipment('Greatsword', 'Heavy', '2d6 slashing', null, 'two-handed'),
    Halberd: new Equipment('Halberd', 'Heavy', '1d10 slashing', null, 'reach, two-handed'),
    Lance: new Equipment('Lance', 'Reach', '1d12 piercing', null, 'special'),
    Longsword: new Equipment('Longsword', 'Versatile (1d10)', '1d8 slashing', null, null),
    Maul: new Equipment('Maul', 'Heavy', '2d6 bludgeoning', null, 'two-handed'),
    Morningstar: new Equipment('Morningstar', null, '1d8 piercing', null, null),
    Pike: new Equipment('Pike', 'Heavy', '1d10 piercing', null, 'reach, two-handed'),
    Rapier: new Equipment('Rapier', 'Finesse', '1d8 piercing', null, null),
    Scimitar: new Equipment('Scimitar', 'Finesse', '1d6 slashing', null, 'light'),
    Shortsword: new Equipment('Shortsword', 'Finesse', '1d6 piercing', null, 'light'),
    Trident: new Equipment('Trident', 'Thrown (range 20/60)', '1d6 piercing', null, 'versatile (1d8)'),
    WarPick: new Equipment('War pick', null, '1d8 piercing', null, null),
    Warhammer: new Equipment('Warhammer', 'Versatile (1d10)', '1d8 bludgeoning', null, null),
    Whip: new Equipment('Whip', 'Finesse', '1d4 slashing', null, 'reach'),
    Blowgun: new Equipment('Blowgun', 'Ammunition (range 25/100)', '1 piercing', null, 'loading'),
    HandCrossbow: new Equipment('Crossbow, hand', 'Ammunition (range 30/120)', '1d6 piercing', null, 'light, loading'),
    HeavyCrossbow: new Equipment('Crossbow, heavy', 'Ammunition (range 100/400)', '1d10 piercing', null, 'heavy, loading, two-handed'),
    Longbow: new Equipment('Longbow', 'Ammunition (range 150/600)', '1d8 piercing', null, 'heavy, two-handed'),
    Net: new Equipment('Net', 'Special', null, null, 'thrown (range 5/15)'),
}