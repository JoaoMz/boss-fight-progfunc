const char = createKnight('Odiceus');
const monster = createLittleMonster();

stage.start(
   char,
   monster,
   document.querySelector('.hero'),
   document.querySelector('.monster') 
);

console.log(`O personagem ${char.name} tem ${char.life} pontos de vida`);