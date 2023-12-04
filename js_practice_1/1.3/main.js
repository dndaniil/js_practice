const btn = document.querySelector('.btn');
        btn.addEventListener('click', () => {
            let radius = document.querySelector('#radius').value;
            let p = document.querySelector('.p');
         
            p.innerHTML = `Площадь: ${3.14 * radius ** 2}<br>
            Окружность: ${2 * 3.14 * radius}`;
        })