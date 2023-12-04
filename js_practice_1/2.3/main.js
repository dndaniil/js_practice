const btn = document.querySelector('button');

function getOwnDivisors(n) {
    let arr = [];
    for (let i = 1; i < n; i++) {
       n % i == 0  && arr.push(i);   
    }
    return arr.join(', ');
}

btn.addEventListener('click', function () {
    let num = document.querySelector('input');
    let p = document.querySelector('p');
    p.innerHTML = getOwnDivisors(num.value);
});
