// Declare variables
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';
const PLAYER = 'PLAYER';
const MONSTER = 'MONSTER';

let chosenMaxLife = +prompt('What is the max life for yourself and the monster', '100');
let battleLog = [];

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

// Declare functions
const reset = () => {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

const endRound = () => {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('You have defied death and have one more chance!');
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      `${PLAYER} WON`,
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      `${MONSTER} WON`,
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <=0 && currentMonsterHealth <= 0) {
    alert('You have a draw!');
    writeToLog(
      LOG_EVENT_MONSTER_ATTACK,
      'DRAW',
      currentMonsterHealth,
      currentPlayerHealth
    );
  }

  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

const attackMonster = (attackMode) => {
  const maxDamage = attackMode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  const logEvent = attackMode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;
  // if(attackMode === MODE_ATTACK) {
  //   maxDamage = ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_ATTACK;
  // } else if (attackMode === MODE_STRONG_ATTACK){
  //   maxDamage = STRONG_ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  // }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(
    logEvent,
    damage,
    currentMonsterHealth,
    currentPlayerHealth
  );
  endRound();
}

const attackHandler = () => {
  attackMonster(MODE_ATTACK);
}

const strongAttackHandler = () => {
 attackMonster(MODE_STRONG_ATTACK);
}

const healPlayerHandler = () => {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal more than your max initial health!")
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    healValue,
    currentMonsterHealth,
    currentPlayerHealth
  );
  endRound();
}

adjustHealthBars(chosenMaxLife);

const writeToLog = (event, value, monsterHealth, playerHealth) => {
  let logEntry = {
    event,
    value,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth
  };
  switch (event) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry.target = MONSTER;
      break;
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry.target = MONSTER;
      break;
    case LOG_EVENT_MONSTER_ATTACK:
      logEntry.target = PLAYER;
      break;
    case LOG_EVENT_PLAYER_HEAL:
      logEntry.target= PLAYER;
    default:
      logEntry = {};        
  }
  
  // if (event === LOG_EVENT_PLAYER_ATTACK) {
  //   logEntry.target = MONSTER;
  // } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
  //   logEntry.target = MONSTER;
  // } else if (event === LOG_EVENT_MONSTER_ATTACK){
  //   logEntry.target = PLAYER;
  // } else if (event === LOG_EVENT_PLAYER_HEAL) {
  //   logEntry.target = PLAYER;
  // }
  battleLog.push(logEntry);
}

const printLogHandler = () => {
  for (let i = 0; i < 3; i++) {
    console.log('----------------')
  }
  
  // let j = 0;
  // while (j < 3) {
  //   console.log('--------');
  //   j++;
  // }
  // for(let i = 0; i < battleLog.length; i++) {
  //   console.log(battleLog[i])
  // }

  //
  // battleLog.forEach(logEntry => {
  //   console.log(logEntry);
  // });

  let i = 0;
  for (const logEntry of battleLog) {
    console.log(`#${i}`);
    for (const key in logEntry) {
      console.log(`${key} => ${logEntry[key]}`);
    }
    i++;
  }
  
}

// Event listeners
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler)
logBtn.addEventListener('click', printLogHandler);