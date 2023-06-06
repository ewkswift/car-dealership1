//Home work 

// Если массив включает в себя больше 5-ти элемента типа number то показать в консоли гуд

let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

let n = arr.filter(item => typeof item === 'number')


if (n.length >= 5) {
    console.log('good');
}

else {
    console.log(
        "bad"
    );
}




// 2

let cars = [17000, 37000, 13000, 12000, 14000, 5000, 10000, 43000, 80000, 2000, 2000]


let from = +prompt('from')
let up = +prompt('up')
let price = cars.filter( item => {
    if(item >= from && item <= up ) {
        console.log(item);
    }
} )


    
   
