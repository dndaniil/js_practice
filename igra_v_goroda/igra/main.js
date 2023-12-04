let field = document.querySelector('#field');
        let message = document.querySelector('#message');
        let allWords = document.querySelector('.allwords');
        let cities = [];
        let allCities = ["Москва", "Санкт-петербург", "Новосибирск",
        "Екатеринбург", "Нижний Новгород", "Казань", "Челябинск", "Омск",
        "Самара", "Ростов-на-дону", "Уфа", "Красноярск", "Пермь", "Воронеж",
        "Волгоград", "Краснодар", "Саратов", "Тюмень", "Тольятти", "Ижевск",
        "Ульяновск", "Барнаул", "Иркутск", "Хабаровск", "Ярославль", "Владивосток",
        "Махачкала", "Томск", "Оренбург", "Кемерово", "Новокузнецк", "Рязань",
        "Астрахань", "Набережные Челны", "Пенза", "Липецк", "Тула", "Киров", "Калининград", "Брянск", "Тверь", "Мурманск", "Магнитогорск",
        "Курск", "Улан-Удэ", "Ставрополь", "Тамбов", "Владикавказ", "Якутск",
        "Смоленск", "Иваново", "Белгород", "Курган", "Тобольск", "Стерлитамак",
        "Бийск", "Комсомольск-на-амуре", "Великий новгород", "Прокопьевск",
        "Химки", "Вологда", "Мытищи", "Южно-сахалинск", "Сыктывкар", "Кострома"]

        field.addEventListener('keydown', (e) => {
            if (e.code == "Enter") {

                checkEverything();
                allWords.innerHTML = cities.map(el => el[0].toUpperCase() + el.slice(1)).join(', ');
                field.value = '';

            }

        })

        function checkLetters(arr, str) {
            let firstLetter = str.toLowerCase().trim().slice(0, 1);
            let lastLetter = arr[arr.length - 1].slice(-1).toLowerCase();

            if (firstLetter !== lastLetter) {
                return false
            };
            return true;

        }

        function checkHasWord(arr, str) {

            return arr.find(el => el.toLowerCase() == str.trim().toLowerCase());
        }

        function botStep(arr1, arr2) {

            let lastLetter = arr2[arr2.length - 1].slice(-1).toLowerCase();

            let wordsWithLastLetter = arr1.filter(el => el.toLowerCase().startsWith(lastLetter) && !arr2.includes(el.toLowerCase()));

            if (wordsWithLastLetter.length === 0) {
                message.innerHTML = 'Ты победил. Я не знаю город на эту букву';
            } else {
                arr2.push(wordsWithLastLetter.pop().toLowerCase());

            }

        }


        function checkEverything() {
            let word = field.value.toLowerCase();

            if (checkHasWord(allCities, word)) {

                if (cities.length === 0) {
                    message.innerHTML = '';
                    cities.push(word.toLowerCase());
                    botStep(allCities, cities);
                } else {

                    if (checkLetters(cities, word) && !checkHasWord(cities, word)) {
                        cities.push(word);
                        botStep(allCities, cities);
                    } else if (!checkLetters(cities, word)) {
                        message.innerHTML = 'Слово должно начинаться на последнюю букву предыдущего';
                    } else {
                        message.innerHTML = 'Такое слово уже есть';
                    }

                }

            } else {
                message.innerHTML = 'Нет такого города';
            }

        }

