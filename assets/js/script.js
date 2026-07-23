const defaultCharacter = {
    name:'',
    life: 100,
    maxLife:100,
    attack: 10,
    defense:8
}

const createKnight = (name) => {
    return{
        ...defaultCharacter,
        name,
        life: 100,
        maxLife:100,
        attack: 10,
        defense:8
    }
}

const createSorcerer = (name) => {
    return{
        ...defaultCharacter,
        name,
        life: 50,
        maxLife:50,
        attack: 14,
        defense:3
    }
}

const createLittleMonster= () => {
    return{
        ...defaultCharacter,
        name: 'Little Monster',
        life: 100,
        maxLife:100,
        attack: 10,
        defense:8
    }
}

const createBigMonster = () => {
    return{
        ...defaultCharacter,
        name: 'Big Monster',
        life: 120,
        maxLife:120,
        attack: 16,
        defense:6
    }
}