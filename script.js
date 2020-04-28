//model
const npc = {
    name: 'NPC',
    life: 200,
    attack: 0,
    shield: 0,
};
const hero = {
    name: 'HERO',
    life: 100,
    attack: 0,
    shield: 0,
};
const battleInfo = document.getElementById('battleInfo');

//view
function updateScore(warior1, warior2) {
    // const warior1name = document.getElementById('warior1name');
    const warior1life = document.getElementById('warior1life');
    // const warior1attack = document.getElementById('warior1attack');
    // const warior1shield = document.getElementById('warior1shield');
    // const warior2name = document.getElementById('warior2name');
    const warior2life = document.getElementById('warior2life');
    // const warior2attack = document.getElementById('warior2attack');
    // const warior2shield = document.getElementById('warior2shield');

    // warior1name.innerHTML = warior1.name;
    warior1life.value = warior1.life;
    // warior1attack.innerHTML = warior1.attack;
    // warior1shield.innerHTML = warior1.shield;
    // warior2name.innerHTML = warior2.name;
    warior2life.value = warior2.life;
    // warior2attack.innerHTML = warior2.attack;
    // warior2shield.innerHTML = warior2.shield;
}
function updateInfo(info) {
    battleInfo.innerHTML = info;
}
function endBattle() {
    document.getElementById('attackFox').removeAttribute('onclick');
}

//controler
function attackFunc() {
    calculateWarior(npc);
    calculateWarior(hero);
    //shield divide attack and make attack lighter
    npc.life = npc.life - Math.floor(hero.attack / npc.shield);
    hero.life = hero.life - Math.floor(npc.attack / hero.shield);
    if (npc.life <= 0) {
        npc.life = 0;
        updateInfo('HERO win');
        endBattle();
    }
    if (hero.life <= 0) {
        hero.life = 0;
        updateInfo('NPC win');
        endBattle();
    }
    updateScore(npc, hero);
    const info = `
    ----------------------</br>
    NPC attack: ${npc.attack}, NPC shield: ${npc.shield}</br>
    HERO attack: ${hero.attack}, HERO shield: ${hero.shield}</br>
    ---</br>
    NPC life: ${npc.life}, HERO life: ${hero.life}</br>
    `;
    updateInfo(info);
}
function calculateWarior(warrior) {
    if (warrior.name === 'NPC') {
        warrior.attack = calculateAttack();
        //npc shield is divided by 2 (less protection)
        warrior.shield = calculateShield() / 2;
        return warrior;
    }
    if (warrior.name === 'HERO') {
        let attack = calculateAttack();
        let attackNumber = Math.floor(Math.random() * 3) + 1;
        //three kind of attack
        let attackValue = {
            1: () => attack * 1,
            2: () => attack * 1.5,
            3: () => attack * 2,
        };
        warrior.attack = Math.floor(attackValue[attackNumber]());
        warrior.shield = calculateShield();
        return warrior;
    }
}
function calculateAttack() {
    return Math.floor(Math.random() * 51) + 10;
}
function calculateShield() {
    return Math.floor(Math.random() * 5) + 2;
}

//
//
function playMusic() {
    var aAudio = new Audio('music.mp3');
    aAudio.play();
}
