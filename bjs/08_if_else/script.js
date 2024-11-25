let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {

    minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));

    orderNumber = 1;

    answerNumber = Math.floor((minValue + maxValue) / 2);

    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber}?`;
    
    gameRun = true;
});


document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 2);
            let answerPhrase;
            if (phraseRandom === 0) {
                answerPhrase =  `Вы загадали неправильное число!\n\u{1F914}`;
            } else if (phraseRandom === 1) {
                answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
            } else if (phraseRandom === 2) {
                answerPhrase = `Это число слишком сложное для меня! \u{1F92F}`
            }
            
                
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 2);
            let answerPhrase;
            if (phraseRandom === 0) {
                answerPhrase = `Вы загадали число ${answerNumber}, не так ли?`;
            } else if (phraseRandom === 1) {
                answerPhrase = `Мне кажется, это число ${answerNumber}, верно?`;
            } else if (phraseRandom === 2) {
                answerPhrase = `Думаю, вы загадали число ${answerNumber}, угадал?`;
            }

            answerField.innerText = answerPhrase;
        }
    }
});

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (answerNumber === minValue) {
            
            const phraseRandom = Math.round( Math.random() * 2);
            let answerPhrase;
            if (phraseRandom === 0) {
                answerPhrase =  `Вы загадали неправильное число!\n\u{1F914}`;
            } else if (phraseRandom === 1) {
                answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
            } else if (phraseRandom === 2) {
                answerPhrase = `Это число слишком сложное для меня! \u{1F92F}`
            }

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
           
            const phraseRandom = Math.round(Math.random() * 2);
            let answerPhrase;
            if (phraseRandom === 0) {
                answerPhrase = `Вы загадали число ${answerNumber}, не так ли?`;
            } else if (phraseRandom === 1) {
                answerPhrase = `Мне кажется, это число ${answerNumber}, верно?`;
            } else if (phraseRandom === 2) {
                answerPhrase = `Думаю, вы загадали число ${answerNumber}, угадал?`;
            }

            answerField.innerText = answerPhrase;
        }
    }
});



document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        const phraseRandom = Math.round(Math.random() * 2);
        let successPhrase;

        if (phraseRandom === 0) {
            successPhrase = `Я всегда угадываю!\n\u{1F60E}`;
        } else if (phraseRandom === 1) {
            successPhrase = `Легче простого!\n\u{1F60E}`;
        } else {
            successPhrase = `Вот и всё, победа за мной!\n\u{1F60E}`;
        }

        answerField.innerText = successPhrase;
        gameRun = false;
    }
});

