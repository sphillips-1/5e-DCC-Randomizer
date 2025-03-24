function GetRandomEquipment(equipmentListCache) {
    const randomIndex = Math.floor(Math.random() * equipmentListCache.length);
    return equipmentListCache[randomIndex];
}

async function getEquipmentList() {
    if (equipmentListCache) {
        return equipmentListCache;
    }
    const weaponResponse = await fetch('https://www.dnd5eapi.co/api/equipment-categories/weapon');
    const armorResponse = await fetch('https://www.dnd5eapi.co/api/equipment-categories/armor');

    if (!weaponResponse.ok || !armorResponse.ok) {
        console.error('Failed to fetch equipment data');
        return [];
    }

    const weaponData = await weaponResponse.json();
    const armorData = await armorResponse.json();

    console.log('Weapon Data:', weaponData);
    console.log('Armor Data:', armorData);

    const weapons = await Promise.all(weaponData.equipment.map(async (item) => {
        const itemResponse = await fetch(`https://www.dnd5eapi.co${item.url}`);
        return itemResponse.json();
    }));

    const armors = await Promise.all(armorData.equipment.map(async (item) => {
        const itemResponse = await fetch(`https://www.dnd5eapi.co${item.url}`);
        return itemResponse.json();
    }));

    equipmentListCache = [
        ...weapons.map(weapon => new Equipment(
            weapon.name,
            weapon.damage ? weapon.damage.damage_dice : 'N/A',
            weapon.properties ? weapon.properties.map(prop => prop.name) : []
        )),
        ...armors.map(armor => new Equipment(
            armor.name,
            '0',
            [
                armor.armor_category,
                armor.armor_class ? `AC = ${armor.armor_class.base} + ${armor.armor_class.dex_bonus ? 'Dex modifier' : ''}` : 'AC not available',
                armor.stealth_disadvantage ? 'Stealth Disadvantage' : ''
            ]
        ))
    ];

    return equipmentListCache;
}

function Equipment(EquipmentName, damage, notes) {
    this.EquipmentName = EquipmentName;
    this.damage = damage;
    this.notes = notes; // notes is now a list of tags
}