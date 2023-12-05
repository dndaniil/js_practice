        let rows = 3;
        let cols = 3;
        let field = document.querySelector('#field');
        let colors = ['red', 'green', 'blue'];
        let p = document.querySelector('p');


        function createTable(rows, cols) {

            for (let i = 0; i < rows; i++) {
                let tr = document.createElement('tr');
                for (let i = 0; i < cols; i++) {
                    let td = document.createElement('td');
                    td.classList.add(getRandomItem(colors));
                    tr.append(td);

                }
                field.append(tr);
            }
        }
        createTable(rows, cols);

        function getRandomItem(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }


        let allTd = document.querySelectorAll('#field td');
        let countClick = 1;

        for (td of allTd) {
            td.addEventListener('click', function () {
                p.innerHTML = 'Count: ' + countClick;
                let curentColor = this.getAttribute('class');
                this.setAttribute('class', getNextColor(colors, curentColor));
                let nextColor = this.getAttribute('class');
                checkWin(allTd, nextColor);
                countClick++;
            })

        }

        function getNextColor(arr, el) {

            for (let i = 0; i < arr.length; i++) {
                if (i == arr.length - 1) {
                    return arr[0];
                }
                if (arr[i] == el) {
                    return arr[i + 1];

                }
            }
        }

        function checkWin(nodeList, el) {
            let i = 0;
            for (let item of nodeList) {
                if (item.classList.contains(el)) {
                    ++i;
                }
            }
            i === nodeList.length && field.insertAdjacentHTML('afterend', `<p>You win!  Минимальное количество ходов: ${getMinStepsCount(colors)}</p>`);
        }