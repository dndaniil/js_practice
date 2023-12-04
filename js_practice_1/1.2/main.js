const btn = document.querySelector('.btn');
        btn.addEventListener('click', () => {
            let h = document.querySelector('#num1');
            let w = document.querySelector('#num2');
            let p = document.querySelector('.p');
            p.innerHTML = `Площадь: ${h.value * w.value} cm<sup>2</sup><br>Периметр: ${h.value * 2 + w.value * 2} cm`;
        })