let attackBtn = document.getElementById("attackButton");
let battleInfo = document.getElementById("battleInfo");
let heroAttack = 45;
let BossAttack = 73;

function attackFunc()   {
    let attackOne = Math.random((heroAttack)  * 1.3);
    let attackTwo = Math.random((heroAttack)  * 1.9);
    let attackCrit = Math.random((heroAttack) * 3);
    let attackRandom = [attackOne, attackTwo, attackCrit];
    
    const randomAttack = attackRandom[Math.floor(Math.random() * attackRandom.length)];

    


}


