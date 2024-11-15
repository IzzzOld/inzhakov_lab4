function task2() {
    let A = document.getElementById('task2A').value;
    let B = document.getElementById('task2B').value;

    A = parseFloat(A);
    B = parseFloat(B);

    if (isNaN(A) || isNaN(B)) {
        document.getElementById('result2').innerText = "Пожалуйста, введите корректные числа";
    } else {
        if (A < B) {
            let summa = 0;
            for (let i = Math.ceil(A); i <= Math.floor(B); i++) { // Привести A и B к целым числам
                summa += i * i;
            }
            document.getElementById('result2').innerText = "Сумма квадратов всех целых чисел от " + Math.ceil(A) + " до " + Math.floor(B) + " = " + summa;
        } else {
            document.getElementById('result2').innerText = "Некорректные значения";
        }
    }
}
