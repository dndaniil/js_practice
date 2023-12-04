 const data = {
            html: "&#60;html&#62;&#60;/html&#62; Указывает программе просмотра страниц, что это HTML документ",
            head: "&#60;head&#62;&#60;/head&#62; Определяет место, где помещается различная информация не отображаемая в теле документа. Здесь располагается тег названия документа и теги для поисковых машин",
            body: "&#60;body&#62;&#60;/body&#62; Определяет видимую часть документа",
            title: "&#60;title&#62;&#60;/title&#62; Помещает название документа в оглавление программы просмотра страниц",
            p: "&#60;p&#62;&#60;/p&#62; Создает новый параграф",
            a: "&lt;a href=&quot;URL&quot;&gtТЕКСТ&lt;/a&gt Создает гиперссылку на другие документы или часть текущего документа."
        };
        let keys = Object.keys(data);
        let search = document.querySelector('#search');
        let btn = document.querySelector('#btn');
        let result = document.querySelector('.result');

        btn.addEventListener('click', () => {
            let val = search.value.trim();

            if (val != "") {
                keys.forEach(key => {
                    keys.includes(val) ? result.innerHTML = data[val] : result.innerHTML = 'Введите корректное название тега';
                })
            } else {
                result.innerHTML = "Введите название тега";
            }
        })

