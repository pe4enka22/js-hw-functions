//За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if. Результат виводити в консоль.

Season = (number)=>{
    if(number===1){
        console.log("spring");
    } else if(number===2){
        console.log("summer");
    } else if(number===3){
        console.log("autumn");
    } else if(number===4) {
        console.log("winter");
    } else {
        console.log("no such season");
    }

}

Season(4);

