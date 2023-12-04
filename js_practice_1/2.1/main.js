const btn = document.querySelector('button');

        btn.addEventListener('click', () => {
            let a = document.querySelector('#a').value;
            let b = document.querySelector('#b').value;
            let c = document.querySelector('#c').value;
            let result = document.querySelector('.result');
            result.innerHTML = quadraticEquation(a,b,c);
        })

        let quadraticEquation = (a, b, c) => {
            if (a == 0)
                return "Ошибка, а = 0 недопустимое значение";
            let D = b * b - 4 * a * c;
            let x1, x2;
            if (D > 0) {
                x1 = (-b + Math.sqrt(D)) / (2 * a);
                x2 = (-b - Math.sqrt(D)) / (2 * a);
                return `
               Коэффициенты: а = ${a}, b = ${b}, с = ${c}<br>
               Корни уравнения: X1 = ${x1}, X2 = ${x2}<br>
               Дискриминант(D) = ${D}`;
            } else if (D == 0) {
                x1 = -b / (2 * a);
                return `
               Коэффициенты: а = ${a}, b = ${b}, с = ${c}<br>
               Корeнь уравнения: X = ${x1}}<br>
               Дискриминант(D) = ${D}`;
            } else {
                return `
                Коэффициенты: а = ${a}, b = ${b}, с = ${c}<br>
               Корнeй нет<br>
               Дискриминант(D) = ${D}`;
            }
        }