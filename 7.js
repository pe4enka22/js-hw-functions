//За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.

function calc(a,b,sign){
    switch(sign){
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            if (b !== 0) {
                return a / b;
            } else {
                return "Число не ділиться на нуль";
            }
            break;
        default:
            return 'Дії не існує';
            break;

    }

}

console.log(calc(2, 10, "/"));


