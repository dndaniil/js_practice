
        const btn = document.querySelector('button');

        const lcm = (a, b) => {
            let c = a, d = b;
            while (a !== b) {
                if (a > b) {
                    a = a - b;
                } else {
                    b = b - a;
                }
            }
            return c / a * d;
        };

        btn.addEventListener('click', () => {
            let a = document.querySelector('#a').value;
            let b = document.querySelector('#b').value;
            let p = document.querySelector('p');
            p.innerHTML = lcm(a, b);
        });
