
            let tb = document.querySelector('#tb');
            let gameTime = 90;
            let timer;

            +function createTable() {
                let count = 0;
                for (let i = 0; i < 10; i++) {
                    let tr = document.createElement('tr');

                    for (let i = 0; i < 10; i++) {
                        let td = document.createElement('td');

                        td.setAttribute('data-num', count);
                        count++;
                        tr.appendChild(td);
                    }
                    tb.appendChild(tr);
                }
            }();


            function getSet() {
                let uniq = new Set();
                while (uniq.size < 10) {
                    uniq.add(Math.floor(Math.random() * 99));
                };
                return uniq;
            }

            const uniq = getSet();

            tb.addEventListener('click', (event) => {
                let data = +event.target.getAttribute('data-num');

                if (uniq.has(data)) {
                    event.target.classList.add('highlight');
                    uniq.delete(data);
                }
            })

                +function countdown() {
                    let span = document.querySelector('span');
                    span.textContent = `Отведенное время: ${gameTime} s`;
                    gameTime--;
                    if (gameTime < 0) {
                        span.textContent = `GAME OVER`;
                        tb.remove();

                    } else if (uniq.size == 0) {
                        span.textContent = `YOU WIN`;
                        tb.remove();
                    }
                    else {
                        timer = setTimeout(countdown, 1000);
                    }
                }();
    