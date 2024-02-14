//Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.


function weekday(weeknumber) {
    switch(weeknumber){
        case 0:
            console.log('Понеділок');
            break;
        case 1:
            console.log('Вівторок');
            break;
        case 2:
            console.log('Середа');
            break;
        case 3:
            console.log('Четвер');
            break;
        case 4:
            console.log('Пятниця');
            break;
        case 5:
            console.log('Субота');
            break;
        case 6:
            console.log('Неділя');
            break;
        default:
            console.log('Дня тижня з таким номером не існує');
            break;

    }
}

(weekday(1));


function weekday1(weeknumber1){
    let days =  ["Понеділок", "Вівторок", "Середа", "Четвер", "Пятниця", "Субота", "Неділя"];
    console.log(days[weeknumber1]);
};


weekday1(2);