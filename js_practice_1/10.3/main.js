
let parent = document.querySelector('#parent');
let timer = document.querySelector('#timer');
let text = document.querySelector('#text');
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let timerId;
let positive = ['Удача улыбается тебе', 'Тебя ждет успех в делах', 'Скоро ты поправишь свое финансовое подожение', 'Впереди только успех', 'Скоро твоя проблема разрешится', 'Твои прежние усилия принесут плоды'];
let negative = ['Тебя ждет разочарование', "Тебе не повезет", "Угроза здоровью", "Финансовые проблемы"];
let mix = [...positive, ...negative].sort(() => Math.random() - 0.5);

start.addEventListener('click', setTimer);

function setTimer() {
    timerId = setInterval(() => {
        timer.innerHTML = Math.floor(Math.random() * mix.length);

        stop.classList.add('active')
    }, 100);
    start.classList.remove('active');
};

stop.addEventListener('click', () => {
    clearInterval(timerId);
    stop.classList.remove('active');
    addMessage(+timer.innerHTML);
})


function addMessage(number) {
    mix.forEach((element, index) => {
        if (index === number) {
            text.innerHTML = element;
            positive.includes(element) ? text.style.color = "green" : text.style.color = "red";
        }
    })
}

