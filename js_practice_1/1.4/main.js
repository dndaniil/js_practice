const btn = document.querySelector('.btn');
        btn.addEventListener('click', () => {
            let a = document.querySelector('#a').value;
            let b = document.querySelector('#b').value;
            let c = document.querySelector('#c').value;
            let p = document.querySelector('.p');
            let pp = ((Number(a) + Number(b) + Number(c))/2);
        console.log(pp);
            p.innerHTML = `Площадь треугольника: ${Math.sqrt(pp*(pp-a)*(pp-b)*(pp-c))} кв. см`;
        })