//Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закінченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.
//     Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)

let meter = 1000;
let km = meter / 1000;
//integer till 1000
if(meter<0){
    console.log('Величина не може бути негативною');
}else if(meter===0){
    console.log(`${meter} метрів це ${km} кілометрів`);
}else if(meter%10===1){
    console.log(`${meter} метр це ${km} кілометрa`);
}else if(meter%10===2 || meter%10===3 || meter%10===4){
    console.log(`${meter} метри це ${km} кілометрa`);
}else if( meter<1000 && meter%10===5 ||
    meter%10===6 ||
    meter%10===7 ||
    meter%10===8 ||
    meter%10===9 ||
    meter%10===0) {
    console.log(`${meter} метрів це ${km} кілометра`);
}else if(meter===1000 && meter>=1000){
    console.log(`${meter} метрів це ${km} кілометр`);
}else if(meter===2000 || meter===3000 || meter===4000){
    console.log(`${meter} метрів це ${km} кілометри`);
}else if(meter>=5000 && meter%1000===0){
    console.log(`${meter} метрів це ${km} кілометрів`);
}else if(!Number.isInteger(meter)){
    console.log(`${meter} метра це ${km} кілометрa`);
} else {
    console.log(`${meter} метра це ${km} кілометрa`);
}
// //if(meter%11===0 || meter%11===1 || meter%11===2 || meter%11===3 && Number.isInteger(meter)){console.log(`${meter} метрів це ${km} кілометрa`)}else // закінчуються нв 11, 12, 13, 14

