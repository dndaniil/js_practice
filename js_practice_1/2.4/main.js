
const btn = document.querySelector('button');

function getDivisors(n) {
    let arr = [];
    for (let i = 1; i < n; i++) {
        if (n % i == 0 && i != 1) arr.push(i);
    }
    return arr;
}

function getCommomDivisors(arr1, arr2) {
    let arr = arr1.filter(el => arr2.includes(el));
    if (arr.length != 0) {
        return arr.join(', ');
    } else {
        return "Нет общих делителей";
    }
}

btn.addEventListener('click', function f() {
    let a = document.querySelector('#a').value;
    let b = document.querySelector('#b').value;
    let p = document.querySelector('p');
    p.innerHTML = getCommomDivisors(getDivisors(a), getDivisors(b));

});
