// Declare variables
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

// Declare functions
const attackMonster = (attackMode) => {
  let maxDamage;
  if(attackMode === 'ATTACK') {
    maxDamage = ATTACK_VALUE;
  } else if (attackMode === 'STRONG_ATTACK'){
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!');
  } else if (currentPlayerHealth <=0 && currentMonsterHealth <= 0) {
    alert('You have a draw!');
  }
}

const attackHandler = () => {
  attackMonster('ATTACK');
}

const strongAttackHandler = () => {
 attackMonster('STRONG_ATTACK');
}

adjustHealthBars(chosenMaxLife);

// Event listeners
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
