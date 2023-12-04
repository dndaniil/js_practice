const data = {
            2020: [
                ['20.01.2020', 'событие 1', 'описание события 1'],
                ['21.01.2020', 'событие 2', 'описание события 2']
            ],
            2021: [
                ['20.01.2021', 'событие 3', 'описание события 4'],
                ['21.01.2021', 'событие 4', 'описание события 4']
            ],
            2023: [
                ['20.01.2023', 'событие 5', 'описание события 5'],
                ['21.01.2023', 'событие 6', 'описание события 6']
            ],

        }

        let input = document.querySelector("#input");
        let table = document.querySelector("#table");
        input.addEventListener('keydown', func);

        function func(event) {
            if (event.key == 'Enter') {
                let val = input.value.trim();
                if (val != "" ) {
                    clearTable();
                    createTable(val);
                }

            }

        }

        function createTable(year) {
            let arr = data[year];
                for (let i = 0; i < arr.length; i++) {
                    let row = document.createElement('tr');
                    row.innerHTML = `<td>${arr[i][0]}</td><td>${arr[i][1]}</td><td>${arr[i][2]}</td>`;
                    table.appendChild(row);
                }
        }

        function clearTable(){
            let trs = document.querySelectorAll('#table tr');
            for(let tr of trs){
                table.removeChild(tr);
            }
           
        }

        
