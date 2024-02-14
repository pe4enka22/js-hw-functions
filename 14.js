//Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закінченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.
//     Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)


function toKilometers(meters){
    let kilometers = meters/1000;
    let firstPart = meters + " метр"
    let secondPart = " це " + kilometers + " кілометр"

    if(meters<0){
        return "Не може бути негативне"
    }
    else if(meters===0){
        return firstPart + "ів" + secondPart + "iв"
    } else if(meters%10===1){
        return firstPart + secondPart + "а"
    } else if(meters%10===2 || meters%10===3 || meters%10===4){
        return firstPart + "и" + secondPart + "а"
    } else if(meters%10===5 ||
    meters%10===6 ||
    meters%10===7 ||
    meters%10===8 ||
    meters%10===9) {
        return firstPart + "ів" + secondPart + "а"
    } else if (meters===1000){
        return  firstPart + "ів" + secondPart
    } else if (meters===2000 || meters===3000 || meters===4000){
        return  firstPart + "ів" + secondPart + "и"
    } else if (meters>=5000 && meters%1000===0){
    return  firstPart + "ів" + secondPart + "ів"
} else if (!Number.isInteger(meters)){
        return firstPart + "а" + secondPart + "а"
    } else{
        return інше
    }

}

console.log(toKilometers(149000));

