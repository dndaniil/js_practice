let btn = document.querySelector('.btn');
        btn.addEventListener('click', () => {
            let num = document.querySelector('#num');
            let p = document.querySelector('.p');
            p.innerHTML = `Площадь: ${num.value ** 2} cm<sup>2</sup><br>Периметр: ${num.value * 4} cm`;
        })