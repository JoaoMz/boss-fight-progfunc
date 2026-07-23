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

const stage = {
    fighter1: null,
    fighter2: null,
    fighter1El: null,
    fighter2El: null,

    start (fighter1, fighter2 ,fighterEl1 ,fighterEl2){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighterEl1 = fighterEl1;
        this.fighterEl2 = fighterEl2;

        this.fighterEl1.querySelector('.attack-button').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighterEl2.querySelector('.attack-button').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));

        this.update();
    },

    update(){
        //fighter 1
        this.fighterEl1.querySelector('.name-hero').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighterEl1.querySelector('.bar').style.width = `${f1Pct}%`;
        //fighter 2 
        this.fighterEl2.querySelector('.name-monster').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighterEl2.querySelector('.bar').style.width = `${f2Pct}%`;
    },

    doAttack(attacking, attacked){
         if(attacking.life <= 0 || attacked.life <= 0){
            console.log('Fim de jogo');
            return;
        }
    }
}